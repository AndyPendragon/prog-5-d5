import type { PaymentMethod } from "../domain/PaymentMethod.ts";
import { PaymentMethodType } from "../domain/PaymentMethod.ts";

export class CardPayment implements PaymentMethod {
  type = PaymentMethodType.Card;

  async verify(amount: number): Promise<boolean> {
    const MINIMUM_AUTHORIZED_AMOUNT = 10;

    await new Promise((resolve) => setTimeout(resolve, 100));
    if (amount > MINIMUM_AUTHORIZED_AMOUNT) {
      throw new Error("The amount exceeds the authorized minimum for card verification.");
    }
    return true;
  }

  async process(amount: number): Promise<void> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));
      this.verify(amount);
      console.log(`Card transaction of ${amount}€ processed`);
    } catch (error) {
      console.error("Error while processing the card transaction:", error);
      throw error;
    }
  }
}
