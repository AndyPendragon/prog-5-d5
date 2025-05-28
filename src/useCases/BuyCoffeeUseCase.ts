import type { PaymentMethod } from "../domain/PaymentMethod.ts";
import type { Drink } from "../domain/Drink.ts";

export class BuyCoffeeUseCase {
  constructor(
    private paymentMethod: PaymentMethod,
    private drink: Drink
  ) {}

  async execute(amount: number): Promise<string> {
    if (!this.drink.isAvailable()) {
      throw new Error("Drink unavailable");
    }

    const isVerified = await this.paymentMethod.verify(amount);
    if (!isVerified) {
      throw new Error("Payment declined");
    }

    await this.paymentMethod.process(amount);

    return `Your ${this.drink.name} is ready. Thank you!`;
  }
}
