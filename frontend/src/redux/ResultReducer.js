import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getResultList } from "./ResultListReducer";

const initialState = {
  email: "",
  name: "",
  score: 0,
  highestScore: 0,
  resultStatus: "",
};

export const insertResult = createAsyncThunk(
  "result/insertResult",
  async (resultData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/result", {
        email: resultData.email,
        name: resultData.name,
        score: resultData.score,
      });

      dispatch(getResultList());
      return response.data;
    } catch (err) {
      const message = err.response.data || err.message;

      return rejectWithValue(message);
    }
  }
);

export const getUserResult = createAsyncThunk(
  "result/getUserResult",
  async (email, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/result?email=${email}`
      );

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
    // insert result
    builder.addCase(insertResult.pending, (state) => {
      return { ...state, resultStatus: "pending" };
    });
    builder.addCase(insertResult.fulfilled, (state, action) => {
      return {
        ...state,
        email: action.payload.email,
        score: action.payload.currentScore,
        highestScore: action.payload.highestScore,
        resultStatus: "success",
      };
    });
    builder.addCase(insertResult.rejected, (state) => {
      return {
        ...state,
        resultStatus: "rejected",
      };
    });

    // getUserResult
    builder.addCase(getUserResult.pending, (state) => {
      return { ...state, resultStatus: "pending" };
    });
    builder.addCase(getUserResult.fulfilled, (state, action) => {
      return {
        ...state,
        email: action.payload.email,
        score: action.payload.currentScore,
        highestScore: action.payload.highestScore,
        resultStatus: "success",
      };
    });
    builder.addCase(getUserResult.rejected, (state) => {
      return {
        ...state,
        resultStatus: "rejected",
      };
    });
  },
});

export default ResultReducer.reducer;
