import React from "react";
import FlightItemTitle from "./flightItem__title/FlightItem__Title";
import { SelectButton, StyledFlightItem } from "./flightItemStyles";
import FlightItemOneFlight from "./flightItem__oneFlight/FlightItem__oneFlight";

const FlightItem = () => {
  return (
    <StyledFlightItem>
      <FlightItemTitle carrierCaption="Air France" price="105368" />
      <FlightItemOneFlight
        departureCity="ЛОНДОН"
        departureAirport="Лондон, Хитроу"
        departureAirportUid="LHR"
        departureDate="2020-08-19T17:35:00"
        arrivalCity="ПАРИЖ"
        arrivalAirport="ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
        arrivalAirportUid="CDG"
        arrivalDate="2020-08-19T19:55:00"
        duration={1400}
        carrierCaption="Air France"
        numberOfTransfers={1}
        oneFlight={2}
      />
      <FlightItemOneFlight
        departureCity="ЛОНДОН"
        departureAirport="Лондон, Хитроу"
        departureAirportUid="LHR"
        departureDate="2020-08-19T17:35:00"
        arrivalCity="ПАРИЖ"
        arrivalAirport="ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
        arrivalAirportUid="CDG"
        arrivalDate="2020-08-19T19:55:00"
        duration={1400}
        carrierCaption="Air France"
        numberOfTransfers={1}
        oneFlight={1}
      />
      <SelectButton>Выбрать</SelectButton>
    </StyledFlightItem>
  );
};

export default FlightItem;
