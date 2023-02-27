import { configureStore, combineReducers } from "@reduxjs/toolkit";
import triviaDataReducer from "./triviaDataReducer";

const rootReducer = combineReducers({
  triviaData: triviaDataReducer,
});

export default configureStore({ reducer: rootReducer });
