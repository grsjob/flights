import React from "react";
import FlightItem from "../flight-item/FlightItem";
import { useStore } from "../../state/storeHooks";
import { store } from "../../state/store";
import { setCurrentFlights } from "../../state/slices/flightsSlice";
import { StyledFlightsList } from "./flightListStyles";
// interface FlightsListProps {
//   flights: IFlights;
// }
const FlightsList = () => {
  const {} = useStore(({ flights }) => flights);
  store.dispatch(setCurrentFlights());
  return (
    <StyledFlightsList>
      <li>
        <FlightItem numberOfFlights={2} />
      </li>
    </StyledFlightsList>
  );
};

export default FlightsList;
