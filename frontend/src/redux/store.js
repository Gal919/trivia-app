import { configureStore, combineReducers } from "@reduxjs/toolkit";
import triviaDataReducer from "./triviaDataReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  triviaData: triviaDataReducer,
  auth: authReducer,
});

export default configureStore({ reducer: rootReducer });
