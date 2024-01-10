import { combineReducers } from "redux";
import tabelDashboard3 from "./Dashboard/tabelDashboard3";
import penyaringanAwalReducer from "./PenyaringanAwal/penyaringanAwalReducer";
import validateFormReducer from "./PenyaringanAwal/validateFormReducer";
import tabReducer from "./PenyaringanAwal/tabReducer";

const rootReducer = combineReducers({
  tabelDashboard3: tabelDashboard3,
  validateForm: validateFormReducer,
  tabReducer: tabReducer,
  penyaringanAwal: penyaringanAwalReducer,
});

export default rootReducer;
