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

    return this.generateReceipt(amount);
  }

  private generateReceipt(amount: number): string {
    return `
Receipt:
---------
Drink: ${this.drink.name}
Price: ${amount}€
Sugar: ${this.drink.options.sugar ?? 0} units
Milk: ${this.drink.options.milk ? "Yes" : "No"}
Payment Method: ${this.paymentMethod.type}
Thank you for your purchase!
    `.trim();
  }
}
