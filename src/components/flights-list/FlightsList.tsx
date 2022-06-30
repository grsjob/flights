import React from "react";
import FlightItem from "../flight-item/FlightItem";
import { StyledFlightsList } from "./flightListStyles";
import { IFlights } from "../../types/flights";
interface FlightsListProps {
  flights: IFlights;
}
const FlightsList = ({ flights }: FlightsListProps) => {
  return (
    <StyledFlightsList>
      {flights.map((flight) => (
        <li key={flight.flightToken}>
          <FlightItem numberOfFlights={flight.flight.legs.length} />
        </li>
      ))}
    </StyledFlightsList>
  );
};

export default FlightsList;
