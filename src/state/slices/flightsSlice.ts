import { IFlights } from "../../types/flights";
import data from "../../assets/data/flights.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// @ts-ignore
const flightsArray = data.result.flights as IFlights;

export interface FlightSliceState {
  flights: IFlights;
  currentFlights: IFlights;
}

const initialState: FlightSliceState = {
  flights: flightsArray,
  currentFlights: flightsArray,
};

const slice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    initialCurrentFlights: (state) => {
      state.currentFlights = state.flights;
    },
    applyFilters: (state, { payload: flights }: PayloadAction<IFlights>) => {
      state.currentFlights = flights;
    },
  },
});

export const { applyFilters, initialCurrentFlights } = slice.actions;
export default slice.reducer;
