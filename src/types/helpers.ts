export interface FillFlightFields {
  departureCity: string;
  departureAirport: string;
  departureAirportUid: string;
  departureDate: string;
  arrivalCity: string;
  arrivalAirport: string;
  arrivalAirportUid: string;
  arrivalDate: string;
  duration: string;
  transfersCount: number;
}

export interface SegmentAndTransferCount {
  segmentsIndex: number;
  transfersCount: number;
}

export interface InterfaceFlightDescription {
  forward: FillFlightFields;
  back: FillFlightFields;
}
