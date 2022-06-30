import { configureStore } from "@reduxjs/toolkit";
import flights from "./slices/flightsSlice";

export const store = configureStore({
  reducer: { flights },
});

export type State = ReturnType<typeof store.getState>;
