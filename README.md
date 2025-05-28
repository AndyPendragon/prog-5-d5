# Coffee Machine CLI

A simple CLI application simulating a coffee machine, built with Deno and TypeScript.

## Features

- Choose from multiple coffee drinks (Espresso, Cappuccino, Americano, Latte)
- Customize your drink (sugar, milk)
- Pay using different payment methods (Card implemented)
- Simple CLI prompts for user interaction

## Project Structure

```
deno.json
main.ts
README.md
src/
  domain/
    Drink.ts
    PaymentMethod.ts
  interfaces/
    CoffeeMachineCLI.ts
  services/
    CardPayment.ts
  useCases/
    BuyCoffeeUseCase.ts
```
## Prerequisites

[Deno](https://deno.com/manual/getting_started/installation) must be installed on your system.

## Usage

Run the CLI with Deno:

```sh
deno run main.ts
```

## How it works

1. Select a payment method (currently only Card is implemented).
2. Scan your payment method and confirm payment.
3. Choose your coffee drink and customize it.
4. Receive your coffee and a thank you message.

## Implementation

- Business logic is in [`src/useCases/BuyCoffeeUseCase.ts`](src/useCases/BuyCoffeeUseCase.ts)
- Payment method interface and types in [`src/domain/PaymentMethod.ts`](src/domain/PaymentMethod.ts)
- Drink model in [`src/domain/Drink.ts`](src/domain/Drink.ts)
- Card payment implementation in [`src/services/CardPayment.ts`](src/services/CardPayment.ts)
- CLI logic in [`src/interfaces/CoffeeMachineCLI.ts`](src/interfaces/CoffeeMachineCLI.ts)

## Repository

[https://github.com/JeanMarc-RAJAONARIVELONA/prog-5-d5](https://github.com/JeanMarc-RAJAONARIVELONA/prog-5-d5)