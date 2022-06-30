import { ICarrier } from "./carrier";
import { IPrice } from "./price";
import { IServicesStatuses } from "./servicesStatuses";
import { ILegs } from "./legs";
import { ISeats } from "./seats";
import { IRefund } from "./refund";

export interface IFlight {
  carrier: ICarrier;
  price: IPrice;
  servicesStatuses: IServicesStatuses;
  legs: ILegs[];
  exchange: IExchange;
  isTripartiteContractDiscountApplied: boolean;
  international: boolean;
  seats: ISeats[];
  refund: IRefund;
}

interface IExchange {
  ADULT: IAdultExchange;
}
interface IAdultExchange {
  exchangeableBeforeDeparture: boolean;
  exchangeAfterDeparture: IExchangeAfterDeparture;
  exchangeBeforeDeparture: IExchangeBeforeDeparture;
  exchangeableAfterDeparture: boolean;
}
interface IExchangeAfterDeparture {
  amount: string;
  currency: string;
  currencyCode: string;
}
interface IExchangeBeforeDeparture {
  amount: string;
  currency: string;
  currencyCode: string;
}
