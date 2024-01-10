import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    key: "abc123",
  },
};

const penyaringanAwalSlice = createSlice({
  name: "penyaringanAwal",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addData } = penyaringanAwalSlice.actions;
export default penyaringanAwalSlice.reducer;
