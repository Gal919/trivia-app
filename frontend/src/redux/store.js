import { configureStore, combineReducers } from "@reduxjs/toolkit";
import triviaDataReducer from "./triviaDataReducer";
import authReducer from "./authReducer";
import resultReducer from "./ResultReducer";
import ResultListReducer from "./ResultListReducer";

const rootReducer = combineReducers({
  triviaData: triviaDataReducer,
  auth: authReducer,
  result: resultReducer,
  resultList: ResultListReducer,
});

export default configureStore({ reducer: rootReducer });
