/* eslint-disable no-useless-constructor */
import { Controller, GET, POST, InjectRepository } from '@triptyk/nfw-core';
import { MovieModel } from '../models/movie.model.js';
import { MovieRepository } from '../repositories/movie.repository.js';
import { EntityFromBody } from '../decorators/entity-from-body.decorator.js';
import { ValidatedMovie } from '../validators/movie.validator.js';

@Controller('/movies')
export class MovieController {
  constructor (@InjectRepository(MovieModel) private movieRepository: MovieRepository) {}

  @GET('/')
  list () {
    return this.movieRepository.findAll();
  }

  @POST('/')
  create (@EntityFromBody(ValidatedMovie, MovieModel) body: MovieModel) {
    return this.movieRepository.jsonApiCreate(body);
  }
}
