import { injectable, singleton } from '@triptyk/nfw-core';
import JSONAPIDeSerializer from 'json-api-serializer';

@injectable()
@singleton()
export class ClientDeserializer {
  private deserializer : JSONAPIDeSerializer;

  constructor () {
    this.deserializer = new JSONAPIDeSerializer();
    this.deserializer.register('clients', {});
  }

  public deserialize (data:any) : any {
    return this.deserializer.deserialize('clients', data);
  }
}
