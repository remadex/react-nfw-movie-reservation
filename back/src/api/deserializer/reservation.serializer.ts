import { injectable, singleton } from '@triptyk/nfw-core';
import JSONAPIDeSerializer from 'json-api-serializer';

@injectable()
@singleton()
export class ReservationDeserializer {
  private deserializer : JSONAPIDeSerializer;

  constructor () {
    this.deserializer = new JSONAPIDeSerializer();
    this.deserializer.register('reservations', {
      relationships: {
        movie: {
          type: 'movies',
        },
        client: {
          type: 'clients',
        },
      },
    });
    this.deserializer.register('movies');
    this.deserializer.register('clients');
  }

  public deserialize (data:any) : any {
    return this.deserializer.deserialize('reservations', data);
  }
}
