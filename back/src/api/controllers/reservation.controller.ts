/* eslint-disable no-useless-constructor */
import { Controller, GET, POST, InjectRepository, injectable, UseMiddleware, UseResponseHandler, DELETE } from '@triptyk/nfw-core';
import { deserialize } from '../middlewares/deserialize.middleware.js';
import { ReservationModel } from '../models/reservation.model.js';
import { ReservationRepository } from '../repositories/reservation.repository.js';
import { EntityFromBody } from '../decorators/entity-from-body.decorator.js';
import { ValidatedReservation } from '../validators/reservation.validator.js';
import { JsonApiResponsehandler } from '../../json-api/response-handlers/json-api.response-handler.js';
import { ReservationSerializer } from '../serializer/reservation.serializer.js';
import { ReservationDeserializer } from '../deserializer/reservation.serializer.js';
import { JsonApiQueryParams, ValidatedJsonApiQueryParams } from '../../json-api/decorators/json-api-params.js';
import { ReservationQueryParamsSchema } from '../query-params-schema/reservation.schema.js';
import { EntityFromParam } from '../decorators/entity-from-param.decorator.js';

@Controller('/reservations')
@injectable()
export class ReservationController {
  constructor (@InjectRepository(ReservationModel) private reservationRepository: ReservationRepository) {}

  @GET('/')
  @UseResponseHandler(JsonApiResponsehandler, ReservationSerializer)
  list (@JsonApiQueryParams(ReservationQueryParamsSchema) queryParams: ValidatedJsonApiQueryParams) {
    return this.reservationRepository.jsonApiFind(queryParams);
  }

  @POST('/')
  @UseMiddleware(deserialize(ReservationDeserializer))
  @UseResponseHandler(JsonApiResponsehandler, ReservationSerializer)
  create (@EntityFromBody(ValidatedReservation, ReservationModel) body: ReservationModel) {
    return this.reservationRepository.jsonApiCreate(body);
  }

  @DELETE('/:id')
  @UseResponseHandler(JsonApiResponsehandler, ReservationSerializer)
  async delete (@EntityFromParam('id', ReservationModel) body: ReservationModel) {
    return this.reservationRepository.jsonApiRemove({ id: body.id });
  }
}
