import {
  PrimaryKey,
  Entity,
  BaseEntity,
  Property,
  ManyToOne,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { ReservationRepository } from '../repositories/reservation.repository.js';
import { ClientModel } from './client.model.js';
import type { MovieModel } from './movie.model.js';

@Entity({
  tableName: 'reservations',
  customRepository: () => ReservationRepository,
})
export class ReservationModel
  extends BaseEntity<any, any> {
  @PrimaryKey()
    id: string = v4();

  @Property()
  declare number: number;

  @Property()
  declare date: Date;

  @ManyToOne('ClientModel')
  declare client: ClientModel;

  @ManyToOne('MovieModel')
  declare movie: MovieModel;
}
