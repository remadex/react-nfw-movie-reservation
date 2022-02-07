import {
  PrimaryKey,
  Entity,
  BaseEntity,
  Property,
  Collection,
  OneToMany,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { ClientRepository } from '../repositories/client.repository.js';
import { ReservationModel } from './reservation.model.js';

@Entity({
  tableName: 'clients',
  customRepository: () => ClientRepository,
})
export class ClientModel
  extends BaseEntity<any, any> {
  @PrimaryKey()
    id: string = v4();

  @Property()
  declare lastName: string;

  @Property()
  declare firstName: string;

  @Property()
  declare email: string;

  @Property()
  declare phone: string;

  @OneToMany('ReservationModel', 'client')
    reservations = new Collection<ReservationModel>(this);

  @Property()
    createdAt: Date = new Date();
}
