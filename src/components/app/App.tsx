import React from "react";
import "../../assets/scss/App.scss";
import Filters from "../filters/Filters";
import { StyledApp } from "./appStyles";
import { store } from "../../state/store";
import { setCurrentFlights } from "../../state/slices/flightsSlice";
import { FlightsListContainer } from "../containers/flightsListContainer/FlightsListContainer";

const App = () => {
  store.dispatch(setCurrentFlights());
  return (
    <StyledApp>
      <Filters />
      <FlightsListContainer />
    </StyledApp>
  );
};

export default App;
