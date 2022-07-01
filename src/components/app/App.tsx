import React from "react";
import "../../assets/scss/App.scss";
import Filters from "../filters/Filters";
import { StyledApp } from "./appStyles";
import { FlightsListContainer } from "../containers/flightsListContainer/FlightsListContainer";

const App = () => {
  return (
    <StyledApp>
      <Filters />
      <FlightsListContainer />
    </StyledApp>
  );
};

export default App;
