import React from "react";
import FlightItem from "../flight-item/FlightItem";
import { StyledFlightsList } from "./flightListStyles";
import { IFlights } from "../../types/flights";
interface FlightsListProps {
  flights: IFlights;
}
const FlightsList = ({ flights }: FlightsListProps) => {
  console.log(flights.length);
  return (
    <StyledFlightsList>
      {flights.map((flight) => (
        <li key={flight.flightToken}>
          <FlightItem
            numberOfFlights={flight.flight.legs.length}
            flight={flight.flight}
          />
        </li>
      ))}
    </StyledFlightsList>
  );
};

export default FlightsList;
