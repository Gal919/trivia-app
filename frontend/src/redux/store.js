import { configureStore, combineReducers } from "@reduxjs/toolkit";
import triviaDataReducer from "./triviaDataReducer";
import userDataReducer from "./userDataReducer";

const rootReducer = combineReducers({
  triviaData: triviaDataReducer,
  userData: userDataReducer,
});

export default configureStore({ reducer: rootReducer });
