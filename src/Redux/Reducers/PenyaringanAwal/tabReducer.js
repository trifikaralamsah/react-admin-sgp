import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: "1",
};

const tabSlice = createSlice({
  name: "tabSlice",
  initialState,
  reducers: {
    tabData: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { tabData } = tabSlice.actions;

export default tabSlice.reducer;
