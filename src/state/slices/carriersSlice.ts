import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarriersState {
  carriers: string[];
}

const initialState: CarriersState = {
  carriers: [],
};

const slice = createSlice({
  name: "carriers",
  initialState,
  reducers: {
    setCurrentCarriers: (
      state,
      { payload: carriers }: PayloadAction<string[]>,
    ) => {
      state.carriers = carriers;
    },
  },
});

export const { setCurrentCarriers } = slice.actions;
export default slice.reducer;
