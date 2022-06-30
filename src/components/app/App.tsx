import React from "react";
import "../../assets/scss/App.scss";
import FlightsList from "../flights-list/FlightsList";
import Filters from "../filters/Filters";
import { StyledApp } from "./appStyles";

const App = () => {
  return (
    <StyledApp>
      <Filters />
      <FlightsList />
    </StyledApp>
  );
};

export default App;
