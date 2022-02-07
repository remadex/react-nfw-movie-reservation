import { Schema, SchemaBase, String } from 'fastest-validator-decorators';

@Schema()
export class ValidatedClient extends SchemaBase {
    @String()
  public lastName!: string;

    @String()
    public firstName!: string;

    @String()
    public email!: string;

    @String()
    public phone!: string;
}

@Schema()
export class ValidatedClientUpdate extends SchemaBase {
    @String({
      optional: true,
    })
  public lastName!: string;

    @String({
      optional: true,
    })
    public firstName!: string;

    @String({
      optional: true,
    })
    public email!: string;

    @String({
      optional: true,
    })
    public phone!: string;
}
