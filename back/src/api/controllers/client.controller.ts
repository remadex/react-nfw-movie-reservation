/* eslint-disable no-useless-constructor */
import { Controller, GET, POST, InjectRepository, injectable, UseMiddleware, UseResponseHandler } from '@triptyk/nfw-core';
import { deserialize } from '../middlewares/deserialize.middleware.js';
import { ClientModel } from '../models/client.model.js';
import { ClientRepository } from '../repositories/client.repository.js';
import { EntityFromBody } from '../decorators/entity-from-body.decorator.js';
import { ValidatedClient } from '../validators/client.validator.js';
import { JsonApiResponsehandler } from '../../json-api/response-handlers/json-api.response-handler.js';
import { ClientSerializer } from '../serializer/client.serializer.js';
import { ClientDeserializer } from '../deserializer/client.serializer.js';

@Controller('/clients')
@injectable()
export class ClientController {
  constructor (@InjectRepository(ClientModel) private clientRepository: ClientRepository) {}

  @GET('/')
  @UseResponseHandler(JsonApiResponsehandler, ClientSerializer)
  list () {
    return this.clientRepository.findAll();
  }

  @POST('/')
  @UseMiddleware(deserialize(ClientDeserializer))
  @UseResponseHandler(JsonApiResponsehandler, ClientSerializer)
  create (@EntityFromBody(ValidatedClient, ClientModel) body: ClientModel) {
    return this.clientRepository.jsonApiCreate(body);
  }
}
