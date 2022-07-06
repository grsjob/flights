import React from "react";
import {
  Arrival,
  Departure,
  Line,
  StyledOneFlight,
  Time,
  Transfers,
  Uid,
} from "./oneFlightStyles";
import { IArrival, IDeparture } from "../FlightItem";
interface FlightItemOneFlightProps {
  departure: IDeparture;
  arrival: IArrival;
  duration: string;
  carrierCaption: string;
  numberOfTransfers: number;
  oneFlight?: number;
}

const FlightItemOneFlight = ({
  departure,
  arrival,
  duration,
  carrierCaption,
  numberOfTransfers,
  oneFlight,
}: FlightItemOneFlightProps) => {
  const { forward, back } = departure;
  const { forward: forwardArrival, back: backArrival } = arrival;
  if (oneFlight < 2) {
    return (
      <StyledOneFlight oneFlight={oneFlight}>
        <Line>
          <Departure>
            {forward.departureCity}, {forward.departureAirport}
            <Uid> ({forward.departureAirportUid})</Uid>
          </Departure>
          <Arrival>
            {forwardArrival.arrivalCity}, {forwardArrival.arrivalAirport}
            <Uid>({forwardArrival.arrivalAirportUid})</Uid>
          </Arrival>
        </Line>
        <Line>
          <span>{forward.departureDate}</span>
          <Time>{duration}</Time>
          <span>{forwardArrival.arrivalDate}</span>
        </Line>
        <Transfers>{numberOfTransfers} пересадка</Transfers>
        <Line>Рейс выполняет: {carrierCaption}</Line>
      </StyledOneFlight>
    );
  } else {
    return (
      <StyledOneFlight oneFlight={oneFlight}>
        <Line>
          <Departure>
            {back.departureCity}, {back.departureAirport}
            <Uid> ({back.departureAirportUid})</Uid>
          </Departure>
          <Arrival>
            {backArrival.arrivalCity}, {backArrival.arrivalAirport}
            <Uid>({backArrival.arrivalAirportUid})</Uid>
          </Arrival>
        </Line>
        <Line>
          <span>{back.departureDate}</span>
          <Time>{duration}</Time>
          <span>{backArrival.arrivalDate}</span>
        </Line>
        <Transfers>{numberOfTransfers} пересадка</Transfers>
        <Line>Рейс выполняет: {carrierCaption}</Line>
      </StyledOneFlight>
    );
  }
};

export default FlightItemOneFlight;
