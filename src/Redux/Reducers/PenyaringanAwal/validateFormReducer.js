import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: true,
};

const validateFormSlice = createSlice({
  name: "validateFormSlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = validateFormSlice.actions;

export default validateFormSlice.reducer;
