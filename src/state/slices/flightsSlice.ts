import { IFlights } from "../../types/flights";
import data from "../../assets/data/flights.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HelpersService } from "../../services/helpersService";

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
    applyFilters: (state, { payload: flights }: PayloadAction<IFlights>) => {
      state.currentFlights = flights;
    },
    ascendingPriceSorting: (state) => {
      state.currentFlights = state.currentFlights.sort(
        (a, b) =>
          Number(a.flight.price.total.amount) -
          Number(b.flight.price.total.amount),
      );
    },
    descendingPriceSorting: (state) => {
      state.currentFlights = state.currentFlights.sort(
        (a, b) =>
          Number(b.flight.price.total.amount) -
          Number(a.flight.price.total.amount),
      );
    },
    byTimeSorting: (state) => {
      state.currentFlights = state.currentFlights.sort(
        (a, b) =>
          HelpersService.getDuration(a.flight.legs) -
          HelpersService.getDuration(b.flight.legs),
      );
    },
  },
});

export const {
  applyFilters,
  ascendingPriceSorting,
  descendingPriceSorting,
  byTimeSorting,
} = slice.actions;
export default slice.reducer;
