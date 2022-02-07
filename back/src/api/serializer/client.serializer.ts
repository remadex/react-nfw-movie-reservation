import { inject, injectable, singleton } from '@triptyk/nfw-core';
import { BaseJsonApiSerializer } from '../../json-api/serializer/base.serializer.js';
import type { ClientModel } from '../models/client.model.js';
import { ConfigurationService } from '../services/configuration.service.js';

@injectable()
@singleton()
export class ClientSerializer extends BaseJsonApiSerializer<ClientModel> {
  constructor (
    @inject(ConfigurationService) configurationService: ConfigurationService,
  ) {
    super(configurationService);

    this.serializer.register('clients', {
      whitelist: ['firstName', 'lastName', 'email', 'phone'],
      relationships: {
        reservations: {
          type: 'reservation',
        },
      },
    });

    this.serializer.register('reservation', {
      whitelist: ['number', 'date'],
    });
  }

  serialize (
    data: ClientModel[] | ClientModel,
    extraData?: Record<string, unknown>,
  ) {
    return this.serializer.serializeAsync(
      'clients',
      data,
      extraData ?? ({} as any),
    );
  }
}
