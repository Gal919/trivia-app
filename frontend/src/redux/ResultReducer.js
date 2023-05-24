import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  email: "",
  score: 0,
  highestScore: 0,
  resultStatus: "",
};

export const insertResult = createAsyncThunk(
  "result/insertResult",
  async (resultData, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/api/result", {
        email: resultData.email,
        score: resultData.score,
      });

      return response.data;
    } catch (err) {
      const message = err.response.data || err.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const ResultReducer = createSlice({
  name: "result",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(insertResult.pending, (state) => {
      return { ...state, resultStatus: "pending" };
    });
    builder.addCase(insertResult.fulfilled, (state, action) => {
      return {
        ...state,
        email: action.payload.email,
        score: action.payload.currentScore,
        highestScore: action.payload.highestScore,
        resultStatus: "fulfilled",
      };
    });
    builder.addCase(insertResult.rejected, (state) => {
      return {
        ...state,
        resultStatus: "rejected",
      };
    });
  },
});

export default ResultReducer.reducer;
