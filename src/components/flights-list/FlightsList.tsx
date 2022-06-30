import React from "react";
import { IFlights } from "../../types/flights";
import FlightItem from "../flight-item/FlightItem";
import { useStore } from "../../state/storeHooks";
import { store } from "../../state/store";
import { setCurrentFlights } from "../../state/slices/flightsSlice";
// interface FlightsListProps {
//   flights: IFlights;
// }
const FlightsList = () => {
  const {} = useStore(({ flights }) => flights);
  store.dispatch(setCurrentFlights());
  return (
    <ul>
      {/*{flights.map((flight) => (*/}
      {/*  <li key={flight.flightToken}>*/}
      {/*    <FlightItem />*/}
      {/*  </li>*/}
      {/*))}*/}
    </ul>
  );
};

export default FlightsList;
