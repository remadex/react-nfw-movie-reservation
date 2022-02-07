import { inject, injectable, singleton } from '@triptyk/nfw-core';
import { BaseJsonApiSerializer } from '../../json-api/serializer/base.serializer.js';
import type { MovieModel } from '../models/movie.model.js';
import { ConfigurationService } from '../services/configuration.service.js';

@injectable()
@singleton()
export class MovieSerializer extends BaseJsonApiSerializer<MovieModel> {
  constructor (
    @inject(ConfigurationService) configurationService: ConfigurationService,
  ) {
    super(configurationService);

    this.serializer.register('movies', {
      whitelist: ['name', 'schedule', 'price'],
      relationships: {
        reservations: {
          type: 'reservation',
        },
      },
    });

    this.serializer.register('reservation', {
      whitelist: ['number', 'date'],
    });
  }

  serialize (
    data: MovieModel[] | MovieModel,
    extraData?: Record<string, unknown>,
  ) {
    return this.serializer.serializeAsync(
      'movies',
      data,
      extraData ?? ({} as any),
    );
  }
}
