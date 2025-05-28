export type DrinkOption = {
  sugar?: number;
  milk?: boolean;
  intensity?: number;
};

export class Drink {
  constructor(
    public name: string,
    public stock: number,
    public options: DrinkOption = {}
  ) {}

  isAvailable(): boolean {
    return this.stock > 0;
  }

  customize(options: DrinkOption) {
    this.options = { ...this.options, ...options };
  }
}
