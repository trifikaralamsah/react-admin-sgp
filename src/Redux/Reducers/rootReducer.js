import { combineReducers } from "redux";
import tabelDashboard1 from "./Dashboard/tabelDashboard1";
import tabelDashboard2 from "./Dashboard/tabelDashboard2";
import tabelDashboard3 from "./Dashboard/tabelDashboard3";

const rootReducer = combineReducers({
  tabelDashboard1: tabelDashboard1,
  tabelDashboard2: tabelDashboard2,
  tabelDashboard3: tabelDashboard3,
});

export default rootReducer;
