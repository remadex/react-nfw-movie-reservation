import { LoadStrategy, MikroORM } from '@mikro-orm/core';
import createApplication, { container } from '@triptyk/nfw-core';
import { AuthController } from './api/controllers/auth.controller.js';
import { UsersController } from './api/controllers/users.controller.js';
import { DefaultErrorHandler } from './api/error-handler/default.error-handler.js';
import { NotFoundMiddleware } from './api/middlewares/not-found.middleware.js';
import { RefreshTokenModel } from './api/models/refresh-token.model.js';
import { UserModel } from './api/models/user.model.js';
import KoaQS from 'koa-qs';
import { DocumentController } from './api/controllers/documents.controller.js';
import {
  Configuration,
  ConfigurationService,
} from './api/services/configuration.service.js';
import { LogMiddleware } from './api/middlewares/log.middleware.js';
import { DocumentModel } from './api/models/document.model.js';
import { LoggerService } from './api/services/logger.service.js';
import cors from '@koa/cors';
import { CurrentUserMiddleware } from './api/middlewares/current-user.middleware.js';
import createHttpError from 'http-errors';
import koaBody from 'koa-body';
import { TestSeeder } from './database/seeder/test.seeder.js';
import { SqlEntityManager } from '@mikro-orm/mysql';
import { createRateLimitMiddleware } from './api/middlewares/rate-limit.middleware.js';
import helmet from 'koa-helmet';
import { MovieModel } from './api/models/movie.model.js';
import { MovieController } from './api/controllers/movie.controller.js';
import { ClientController } from './api/controllers/client.controller.js';
import { ClientModel } from './api/models/client.model.js';
import { ReservationModel } from './api/models/reservation.model.js';
import { ReservationController } from './api/controllers/reservation.controller.js';

export async function runApplication () {
  /**
   * Load the config service first
   */
  const {
    database,
    port,
    cors: corsConfig,
    env,
  } = await container
    .resolve<ConfigurationService<Configuration>>(ConfigurationService)
    .load();
  const logger = container.resolve(LoggerService);
  const orm = await MikroORM.init({
    entities: [UserModel, RefreshTokenModel, DocumentModel, MovieModel, ReservationModel, ClientModel],
    dbName: database.database,
    host: database.host,
    user: database.user,
    password: database.password,
    type: database.type,
    loadStrategy: LoadStrategy.SELECT_IN,
    debug: database.debug,
    findOneOrFailHandler: (_entityName: string) => {
      return createHttpError(404, 'Not found');
    },
  });

  const isConnected = await orm.isConnected();

  if (!isConnected) {
    throw new Error('Failed to connect to database');
  }

  if (env === 'test') {
    const generator = orm.getSchemaGenerator();
    await generator.dropSchema();
    await generator.createSchema();
    await generator.updateSchema();
    await new TestSeeder().run(orm.em as SqlEntityManager);
  }

  const koaApp = await createApplication({
    controllers: [AuthController, UsersController, DocumentController, MovieController, ReservationController, ClientController],
    globalGuards: [],
    globalMiddlewares: [
      helmet(),
      cors({
        origin: corsConfig.origin,
      }),
      createRateLimitMiddleware(1000 * 60, 100, 'Too many requests'),
      koaBody({
        onError: (err) => {
          throw createHttpError(400, err.message);
        },
      }),
      CurrentUserMiddleware,
      LogMiddleware,
    ],
    globalErrorhandler: DefaultErrorHandler,
    globalNotFoundMiddleware: NotFoundMiddleware,
    mikroORMConnection: orm,
    mikroORMContext: true,
    baseRoute: '/api/v1',
  });

  KoaQS(koaApp);

  const httpServer = koaApp.listen(port, () => {
    logger.logger.info(`Listening on port ${port}`);
  });

  return httpServer;
}
