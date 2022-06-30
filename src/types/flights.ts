import { IFlight } from "./flight";

export type IFlights = IOneFlight[];

export interface IOneFlight {
  hasExtendedFare: boolean;
  flight: IFlight;
  flightToken: string;
}
