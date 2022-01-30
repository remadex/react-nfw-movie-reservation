import { JsonApiRepository } from '../../json-api/repositories/json-api.repository.js';
import { MovieModel } from '../models/movie.model.js';

export class MovieRepository extends JsonApiRepository<MovieModel> {
}
