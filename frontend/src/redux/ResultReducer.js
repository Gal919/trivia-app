import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  score: 0,
};

const ResultReducer = createSlice({
  name: "result",
  initialState,
  reducers: {
    updateScore: (state, action) => {
      return {
        ...state,
        email: action.payload.email,
        score: action.payload.score,
      };
    },
  },
});

export const { updateScore } = ResultReducer.actions;
export default ResultReducer.reducer;
