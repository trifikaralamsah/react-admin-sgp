// import "./App.css";
import "./Styles/global.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AppLayout from "./Components/Layout/AppLayout";
import PenyaringanAwal from "./Pages/PenyaringanAwal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/PenyaringanAwal" element={<PenyaringanAwal />} />
      </Route>
    </Routes>
  );
}

export default App;
