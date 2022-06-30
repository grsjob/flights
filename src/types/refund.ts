export interface IRefund {
  ADULT: IAdult;
}
interface IAdult {
  refundableBeforeDeparture: boolean;
  refundableAfterDeparture: boolean;
}
