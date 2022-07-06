import { configureStore } from "@reduxjs/toolkit";
import flights from "./slices/flightsSlice";
import carriers from "./slices/carriersSlice";

export const store = configureStore({
  reducer: { flights, carriers },
});

export type State = ReturnType<typeof store.getState>;
