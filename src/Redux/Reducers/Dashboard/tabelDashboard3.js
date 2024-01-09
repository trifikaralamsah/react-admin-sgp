import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      key: "id53ba86a6e7b001",
      no: "01",
      ao: "Muhammad Satrio",
      tugas: "Penyaringan Awal",
      status: "Selesai",
      catatan: "-",
      dibuat_pada: "2023-02-09",
    },
    {
      key: "id53ba86a6e7b002",
      no: "02",
      ao: "Muhammad Taufik",
      tugas: "SLIK Upload",
      status: "Belum Dikerjakan",
      catatan: "Segera Diselesaikan",
      dibuat_pada: "2023-02-10",
    },
    {
      key: "id53ba86a6e7b003",
      no: "03",
      ao: "Muhammad Iqbal",
      tugas: "SLIK Review",
      status: "Sedang Dikerjakan",
      catatan: "-",
      dibuat_pada: "2023-02-11",
    },
    {
      key: "id53ba86a6e7b004",
      no: "04",
      ao: "Tafarel Agustino",
      tugas: "Document Entry",
      status: "Sedang Dikerjakan",
      catatan: "Pastikan Dokumen Lengkap",
      dibuat_pada: "2023-02-12",
    },
  ],
};

const tabelDashboard3Slice = createSlice({
  name: "tabelDashboard3",
  initialState,
  reducers: {
    // setData: (state, action) => {
    //   state.data = action.payload;
    // },
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    editData: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.key === action.payload.key) {
          return action.payload;
        }
        return item;
      });
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((item) => item.key !== action.payload);
    },
  },
});

export const { addData, editData, deleteData } = tabelDashboard3Slice.actions;

export default tabelDashboard3Slice.reducer;
