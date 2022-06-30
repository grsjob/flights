import React from "react";
import "../../assets/scss/App.scss";
import FlightsList from "../flights-list/FlightsList";
import Filters from "../filters/Filters";
import { StyledApp } from "./appStyles";
import { store } from "../../state/store";
import { setCurrentFlights } from "../../state/slices/flightsSlice";

const App = () => {
  store.dispatch(setCurrentFlights());
  return (
    <StyledApp>
      <Filters />
      <FlightsList />
    </StyledApp>
  );
};

export default App;
