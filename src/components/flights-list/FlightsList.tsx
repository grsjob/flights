import React, { useEffect, useState } from "react";
import FlightItem from "../flight-item/FlightItem";
import {
  FlightsListWrapper,
  ShowMoreButton,
  StyledFlightsList,
} from "./flightListStyles";
import { IFlights } from "../../types/flights";
interface FlightsListProps {
  flights: IFlights;
}
const FlightsList = ({ flights }: FlightsListProps) => {
  const [count, setCount] = useState(10);
  const [visibleFlights, setVisibleFlights] = useState<IFlights>([]);
  useEffect(() => {
    setVisibleFlights(flights.filter((flight, index) => index <= count));
  }, [count, flights]);
  return (
    <FlightsListWrapper>
      <StyledFlightsList>
        {visibleFlights.map((flight) => (
          <li key={flight.flightToken}>
            <FlightItem
              numberOfFlights={flight.flight.legs.length}
              flight={flight.flight}
            />
          </li>
        ))}
      </StyledFlightsList>
      {flights.length === visibleFlights.length ? null : (
        <ShowMoreButton onClick={() => setCount(count + 10)}>
          Показать еще
        </ShowMoreButton>
      )}
    </FlightsListWrapper>
  );
};

export default FlightsList;
