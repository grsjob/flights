export interface ILegs {
  duration: number;
  segments: ISegments[];
}

interface ISegments {
  classOfServiceCode: string;
  classOfService: IClassOfService;
  departureAirport: IDepartureAirport;
  departureCity: IDepartureCity;
  aircraft: IAircraft;
  travelDuration: number;
  arrivalCity: IArrivalCity;
  arrivalDate: string;
  flightNumber: string;
  techStopInfos: Array<unknown>;
  departureDate: string;
  stops: number;
  servicesDetails: IServicesDetails;
  airline: IAirline;
  starting: boolean;
  arrivalAirport: IArrivalAirport;
}
interface IClassOfService {
  uid: string;
  caption: string;
}

interface IDepartureAirport {
  uid: string;
  caption: string;
}
interface IDepartureCity {
  uid: string;
  caption: string;
}
interface IAircraft {
  uid: string;
  caption: string;
}
interface IArrivalCity {
  uid: string;
  caption: string;
}
interface IServicesDetails {
  freeCabinLuggage: unknown;
  paidCabinLuggage: unknown;
  tariffName: string;
  fareBasis: IFareBasis;
  freeLuggage: IFreeLuggage;
  paidLuggage: unknown;
}
interface IFareBasis {
  ADULT: string;
}
interface IFreeLuggage {
  ADULT: IAdult;
}
interface IAdult {
  pieces: number;
  nil: boolean;
  unit: string;
}
interface IAirline {
  uid: string;
  caption: string;
  airlineCode: string;
}
interface IArrivalAirport {
  uid: string;
  caption: string;
}
