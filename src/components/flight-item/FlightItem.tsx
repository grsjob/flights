import React from "react";
import FlightItemTitle from "./flightItem__title/FlightItem__Title";
import { SelectButton, StyledFlightItem } from "./flightItemStyles";
import FlightItemOneFlight from "./flightItem__oneFlight/FlightItem__oneFlight";
interface FlightItemProps {
  numberOfFlights: number;
}

const FlightItem = ({ numberOfFlights }: FlightItemProps) => {
  const count: number[] = [];
  for (let i = 1; i <= numberOfFlights; i++) {
    count.push(i);
  }

  return (
    <StyledFlightItem>
      <FlightItemTitle carrierCaption="Air France" price="105368" />
      {count.map((count) => (
        <FlightItemOneFlight
          key={count}
          departureCity="ЛОНДОН"
          departureAirport="Лондон, Хитроу"
          departureAirportUid="LHR"
          departureDate={formatDate("2020-08-19T17:35:00")}
          arrivalCity="ПАРИЖ"
          arrivalAirport="ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
          arrivalAirportUid="CDG"
          arrivalDate={formatDate("2020-08-19T19:55:00")}
          duration={calcDuration(1400)}
          carrierCaption="Air France"
          numberOfTransfers={1}
          oneFlight={count}
        />
      ))}

      <SelectButton>Выбрать</SelectButton>
    </StyledFlightItem>
  );
};

export default FlightItem;

function formatDate(date: string): string {
  const newDate = new Date(date);
  return newDate.toLocaleString();
}

function calcDuration(duration: number): string {
  const durationInHours = Math.trunc(duration / 60);
  const durationInMinute = duration - durationInHours * 60;
  return `${durationInHours} ч ${durationInMinute} мин`;
}
