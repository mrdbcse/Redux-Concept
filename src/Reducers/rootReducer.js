import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { bankingReducer } from "./bankingReducers";

export const rootReducer = combineReducers({
  banking: bankingReducer,
  auth: authReducer,
});
