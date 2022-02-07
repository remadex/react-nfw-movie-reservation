import { inject, injectable, singleton } from '@triptyk/nfw-core';
import { BaseJsonApiSerializer } from '../../json-api/serializer/base.serializer.js';
import type { ReservationModel } from '../models/reservation.model.js';
import { ConfigurationService } from '../services/configuration.service.js';

@injectable()
@singleton()
export class ReservationSerializer extends BaseJsonApiSerializer<ReservationModel> {
  constructor (
    @inject(ConfigurationService) configurationService: ConfigurationService,
  ) {
    super(configurationService);

    this.serializer.register('reservations', {
      whitelist: ['number'],
      relationships: {
        client: {
          type: 'client',
        },
        movie: {
          type: 'movie',
        },
      },
    });

    this.serializer.register('client', {
      whitelist: ['lastName', 'firstName', 'email', 'phone'],
    });

    this.serializer.register('movie', {
      whitelist: ['name', 'price', 'schedule'],
    });
  }

  serialize (
    data: ReservationModel[] | ReservationModel,
    extraData?: Record<string, unknown>,
  ) {
    return this.serializer.serializeAsync(
      'reservations',
      data,
      extraData ?? ({} as any),
    );
  }
}
