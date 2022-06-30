import React from "react";
import {
  Arrival,
  Departure,
  Line,
  OneFlight,
  Time,
  Transfers,
  Uid,
} from "./oneFlightStyles";
interface FlightItemOneFlightProps {
  departureCity: string;
  departureAirport: string;
  departureAirportUid: string;
  departureDate: string;
  arrivalCity: string;
  arrivalAirport: string;
  arrivalAirportUid: string;
  arrivalDate: string;
  duration: string;
  carrierCaption: string;
  numberOfTransfers: number;
  oneFlight?: number;
}

const FlightItemOneFlight = ({
  departureCity,
  departureAirport,
  departureAirportUid,
  departureDate,
  arrivalCity,
  arrivalAirport,
  arrivalAirportUid,
  arrivalDate,
  duration,
  carrierCaption,
  numberOfTransfers,
  oneFlight,
}: FlightItemOneFlightProps) => {
  return (
    <OneFlight oneFlight={oneFlight}>
      <Line>
        <Departure>
          {departureCity}, {departureAirport}
          <Uid> ({departureAirportUid})</Uid>
        </Departure>
        <Arrival>
          {arrivalCity}, {arrivalAirport}
          <Uid>({arrivalAirportUid})</Uid>
        </Arrival>
      </Line>
      <Line>
        <span>{departureDate}</span>
        <Time>{duration}</Time>
        <span>{arrivalDate}</span>
      </Line>
      <Transfers>{numberOfTransfers} пересадка</Transfers>
      <Line>Рейс выполняет: {carrierCaption}</Line>
    </OneFlight>
  );
};

export default FlightItemOneFlight;
