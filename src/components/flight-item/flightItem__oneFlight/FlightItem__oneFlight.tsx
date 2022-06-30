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
  duration: number;
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
        <span>{formatDate(departureDate)}</span>
        <Time>{calcDuration(duration)}</Time>
        <span>{formatDate(arrivalDate)}</span>
      </Line>
      <Transfers>{numberOfTransfers} пересадка</Transfers>
      <Line>Рейс выполняет: {carrierCaption}</Line>
    </OneFlight>
  );
};

export default FlightItemOneFlight;

function formatDate(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleString();
}

function calcDuration(duration: number) {
  const durationInHours = Math.trunc(duration / 60);
  const durationInMinute = duration - durationInHours * 60;
  return `${durationInHours} ч ${durationInMinute} мин`;
}
