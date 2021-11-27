export class toast {
  public constructor(init?: Partial<toast>) {
    Object.assign(this, init);
  }

  Title: string;
  Content: string;
  Count: number;
  Timer: number;
  TimeLeft: number;
  Style: string;
  PercentageCompleted: number;
}
