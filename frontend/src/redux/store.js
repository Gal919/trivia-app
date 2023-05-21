import { configureStore, combineReducers } from "@reduxjs/toolkit";
import triviaDataReducer from "./triviaDataReducer";
import authReducer from "./authReducer";
import resultReducer from "./ResultReducer";

const rootReducer = combineReducers({
  triviaData: triviaDataReducer,
  auth: authReducer,
  result: resultReducer,
});

export default configureStore({ reducer: rootReducer });
