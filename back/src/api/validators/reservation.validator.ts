import { Schema, SchemaBase, Number } from 'fastest-validator-decorators';

@Schema()
export class ValidatedReservation extends SchemaBase {
    @Number()
  public number!: number;
}

@Schema()
export class ValidatedReservationUpdate extends SchemaBase {
    @Number({
      optional: true,
    })
  public number!: number;
}
