import {
  PrimaryKey,
  Entity,
  BaseEntity,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { MovieRepository } from '../repositories/movie.repository.js';

@Entity({
  tableName: 'movies',
  customRepository: () => MovieRepository,
})
export class MovieModel
  extends BaseEntity<any, any> {
  @PrimaryKey()
    id: string = v4();

  @Property()
  declare name: string;

  @Property()
  declare price: number;

  @Property()
  declare schedule: string;

  @Property()
    createdAt: Date = new Date();
}
