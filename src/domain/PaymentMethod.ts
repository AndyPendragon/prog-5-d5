export enum PaymentMethodType {
  Card = "CARD",
  Token = "TOKEN",
  MobileMoney = "MOBILE_MONEY",
}

export interface PaymentMethod {
  type: PaymentMethodType;
  verify(amount: number): Promise<boolean>;
  process(amount: number): Promise<void>;
}
