import { IFlights } from "../../types/flights";
import data from "../../assets/data/flights.json";
import { createSlice } from "@reduxjs/toolkit";

// @ts-ignore
const flightsArray = data.result.flights as IFlights;

export interface FlightSliceState {
  flights: IFlights;
  currentFlights: IFlights;
}

const initialState: FlightSliceState = {
  flights: flightsArray,
  currentFlights: [],
};

const slice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setCurrentFlights: (state) => {
      const intermediate = state.flights.filter((flights) => {
        const route = flights.flight.legs.filter(
          (leg) => leg.segments.length === 2,
        );
        if (route.length > 0) return route;
      });
      state.currentFlights = state.flights.filter(
        (flight) => !intermediate.includes(flight),
      );
    },
  },
});

export const { setCurrentFlights } = slice.actions;
export default slice.reducer;
