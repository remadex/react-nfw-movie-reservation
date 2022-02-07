/* eslint-disable no-useless-constructor */
import { Controller, GET, POST, InjectRepository, injectable, UseMiddleware, UseResponseHandler, DELETE } from '@triptyk/nfw-core';
import { deserialize } from '../middlewares/deserialize.middleware.js';
import { MovieModel } from '../models/movie.model.js';
import { MovieRepository } from '../repositories/movie.repository.js';
import { EntityFromBody } from '../decorators/entity-from-body.decorator.js';
import { ValidatedMovie } from '../validators/movie.validator.js';
import { JsonApiResponsehandler } from '../../json-api/response-handlers/json-api.response-handler.js';
import { MovieSerializer } from '../serializer/movie.serializer.js';
import { MovieDeserializer } from '../deserializer/movie.serializer.js';
import { EntityFromParam } from '../decorators/entity-from-param.decorator.js';

@Controller('/movies')
@injectable()
export class MovieController {
  constructor (@InjectRepository(MovieModel) private movieRepository: MovieRepository) {}

  @GET('/')
  @UseResponseHandler(JsonApiResponsehandler, MovieSerializer)
  list () {
    return this.movieRepository.findAll();
  }

  @POST('/')
  @UseMiddleware(deserialize(MovieDeserializer))
  @UseResponseHandler(JsonApiResponsehandler, MovieSerializer)
  create (@EntityFromBody(ValidatedMovie, MovieModel) body: MovieModel) {
    return this.movieRepository.jsonApiCreate(body);
  }

  @DELETE('/:id')
  @UseResponseHandler(JsonApiResponsehandler, MovieSerializer)
  async delete (@EntityFromParam('id', MovieModel) body: MovieModel) {
    return this.movieRepository.jsonApiRemove({ id: body.id });
  }
}
