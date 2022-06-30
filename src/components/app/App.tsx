import React from "react";
import "../../assets/scss/App.scss";
import FlightItem from "../flight-item/FlightItem";
import FlightsList from "../flights-list/FlightsList";

const App = () => {
  return (
    <>
      <FlightItem />
      <FlightsList />
    </>
  );
};

export default App;
