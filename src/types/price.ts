export interface IPrice {
  total: ITotalPrice;
  totalFeeAndTaxes: ITotalFeeAndTaxes;
  rates: IRates;
  passengerPrices: IPassengerPrices[];
}

interface ITotalPrice {
  amount: string;
  currency: string;
  currencyCode: string;
}
interface ITotalFeeAndTaxes {
  amount: string;
  currency: string;
  currencyCode: string;
}

interface IRates {
  totalUsd: ITotalUsD;
  totalEur: ITotalEur;
}

interface ITotalUsD {
  amount: string;
  currencyCode: string;
}
interface ITotalEur {
  amount: string;
  currencyCode: string;
}

interface IPassengerPrices {
  total: ITotalPrice;
  passengerType: IPassengerType;
  singlePassengerTotal: inglePassengerTotal;
  passengerCount: number;
  tariff: ITariff;
  feeAndTaxes: IFeeAndTaxes;
}
interface IPassengerType {
  uid: string;
  caption: string;
}
interface inglePassengerTotal {
  amount: string;
  currency: string;
  currencyCode: string;
}
interface ITariff {
  amount: string;
  currency: string;
  currencyCode: string;
}

interface IFeeAndTaxes {
  amount: string;
  currency: string;
  currencyCode: string;
}
