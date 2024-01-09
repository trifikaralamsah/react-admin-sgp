import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      name: "test",
      email: "test",
    },
    {
      id: 2,
      name: "test",
      email: "testajaa",
    },
  ],
};

const tabelDashboard1Slice = createSlice({
  name: "tabelDashboard1",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const tabelDashboard1 = tabelDashboard1Slice.actions;

export default tabelDashboard1Slice.reducer;
