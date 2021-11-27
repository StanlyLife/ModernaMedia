export class toast {
  public constructor(init?: Partial<toast>) {
    Object.assign(this, init);
  }

  Title: string;
  Content: string;
  Count: string;
  Timer: string;
}
