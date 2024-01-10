import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      key: "id53ba86a6e7b001",
      no: "01",
      ao: "Muhammad Satrio",
      totalPengajuan: 10,
      tugas: "Penyaringan Awal",
      status: "Selesai",
      catatan: "-",
      dibuatPada: "2023-02-09",
      jenisNasabah: "Lembaga",
      plafon: "Rp. 200.000.000",
      statusAplikasi: "Disetujui",
      kelengkapanDokumen: "Lengkap",
    },
    {
      key: "id53ba86a6e7b002",
      no: "02",
      ao: "Muhammad Taufik",
      totalPengajuan: 8,
      tugas: "SLIK Upload",
      status: "Belum Dikerjakan",
      catatan: "Segera Diselesaikan",
      dibuatPada: "2023-02-10",
      jenisNasabah: "Perorangan",
      plafon: "Rp. 33.003.797,45",
      statusAplikasi: "Unggah Dokumen",
      kelengkapanDokumen: "Belum Lengkap",
    },
    {
      key: "id53ba86a6e7b003",
      no: "03",
      ao: "Muhammad Iqbal",
      totalPengajuan: 5,
      tugas: "SLIK Review",
      status: "Sedang Dikerjakan",
      catatan: "-",
      dibuatPada: "2023-02-11",
      jenisNasabah: "Lembaga",
      plafon: "Rp. 33.003.797,45",
      statusAplikasi: "Disetujui",
      kelengkapanDokumen: "Lengkap",
    },
    {
      key: "id53ba86a6e7b004",
      no: "04",
      ao: "Tafarel Agustino",
      totalPengajuan: 3,
      tugas: "Document Entry",
      status: "Sedang Dikerjakan",
      catatan: "Pastikan Dokumen Lengkap",
      dibuatPada: "2023-02-12",
      jenisNasabah: "Perorangan",
      plafon: "Rp. 100.000.000",
      statusAplikasi: "Dokumen Review",
      kelengkapanDokumen: "Sedang Direview",
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
    addDataDashboard3: (state, action) => {
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

export const { addDataDashboard3, editData, deleteData } =
  tabelDashboard3Slice.actions;

export default tabelDashboard3Slice.reducer;
