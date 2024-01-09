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

const tabelDashboard2Slice = createSlice({
  name: "tabelDashboard2",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const tabelDashboard2 = tabelDashboard2Slice.actions;

export default tabelDashboard2Slice.reducer;
