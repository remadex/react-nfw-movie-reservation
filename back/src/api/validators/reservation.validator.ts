import { Schema, SchemaBase, Number, Date } from 'fastest-validator-decorators';

@Schema()
export class ValidatedReservation extends SchemaBase {
    @Number()
  public number!: number;

    @Date()
    public date!: Date;
}

@Schema()
export class ValidatedReservationUpdate extends SchemaBase {
    @Number({
      optional: true,
    })
  public number!: number;

  @Date({
    optional: true,
  })
    public date!: Date;
}
