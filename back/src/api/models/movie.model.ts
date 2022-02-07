import {
  PrimaryKey,
  Entity,
  BaseEntity,
  Property,
  Collection,
  OneToMany,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { MovieRepository } from '../repositories/movie.repository.js';
import { ReservationModel } from './reservation.model.js';

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

  @OneToMany({ entity: () => ReservationModel, mappedBy: 'movie', orphanRemoval: true })
    reservations = new Collection<ReservationModel>(this);
}
