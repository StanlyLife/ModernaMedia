export class CTA {
  public constructor(init?: Partial<CTA>) {
    Object.assign(this, init);
  }

  Email: string;
  Phonenumber: string;
  Body: string;
}
