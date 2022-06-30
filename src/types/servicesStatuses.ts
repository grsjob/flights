export interface IServicesStatuses {
  baggage: IBaggage;
  exchange: IExchange;
  refund: IRefund;
}
interface IBaggage {
  uid: string;
  caption: string;
}
interface IExchange {
  uid: string;
  caption: string;
}
interface IRefund {
  uid: string;
  caption: string;
}
