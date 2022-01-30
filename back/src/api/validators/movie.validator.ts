import { Schema, SchemaBase, String, Number } from 'fastest-validator-decorators';

@Schema()
export class ValidatedMovie extends SchemaBase {
    @String()
  public name!: string;

    @Number()
    public price!: number;

    @String()
    public schedule!: string;
}

@Schema()
export class ValidatedMovieUpdate extends SchemaBase {
    @String({
      optional: true,
    })
  public name!: string;

    @Number({
      optional: true,
    })
    public price!: number;

    @String({
      optional: true,
    })
    public schedule!: string;
}
