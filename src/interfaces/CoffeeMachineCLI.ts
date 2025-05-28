import { CardPayment } from "../services/CardPayment.ts";
import { Drink } from "../domain/Drink.ts";
import { BuyCoffeeUseCase } from "../useCases/BuyCoffeeUseCase.ts";

export async function runCoffeeMachineCLI() {
  const FIXED_PRICE = 10;

  const paymentOptions = ["Card", "Token", "Mobile Money"];
  const paymentIndex = Number(
    prompt(
      `Choose a payment method:\n${paymentOptions.map((m, i) => `  ${i + 1}. ${m}`).join("\n")}\n(Enter 1-3):`
    ) || "1"
  ) - 1;
  const paymentMethodName = paymentOptions[paymentIndex] || "Card";

  const confirm = prompt(`Scan your ${paymentMethodName} and press 'y' to pay ${FIXED_PRICE}€:`) || "n";
  if (confirm.trim().toLowerCase() !== "y") {
    console.log("Payment cancelled.");
    return;
  }

  const payment = new CardPayment();

  const coffeeOptions = ["Espresso", "Cappuccino", "Americano", "Latte"];
  const coffeeIndex = Number(
    prompt(
      `Choose your drink:\n${coffeeOptions.map((name, i) => `  ${i + 1}. ${name}`).join("\n")}\n(Enter 1-4):`
    ) || "1"
  ) - 1;
  const coffeeName = coffeeOptions[coffeeIndex] || "Espresso";

  const sugarInput = prompt("Amount of sugar (0-5):") || "2";
  const sugar = Number(sugarInput);

  const milkInput = prompt("Do you want milk? (y/n):") || "y";
  const milk = milkInput.trim().toLowerCase() === "y";

  const drink = new Drink(coffeeName, FIXED_PRICE);
  drink.customize({ sugar, milk });

  const useCase = new BuyCoffeeUseCase(payment, drink);

  try {
    const receipt = await useCase.execute(FIXED_PRICE);
    console.log(receipt);
  } catch (e) {
    console.error("Error:", (e as Error).message);
  }
}