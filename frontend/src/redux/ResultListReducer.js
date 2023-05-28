import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  resultList: [],
  resultListStatus: "",
};

export const getResultList = createAsyncThunk(
  "result/getResultList",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:5000/api/resultList");

      return response.data;
    } catch (err) {
      const message = err.response.data || err.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const ResultListReducer = createSlice({
  name: "resultList",
  initialState,
  extraReducers: (builder) => {
    // getResultList
    builder.addCase(getResultList.pending, (state) => {
      return { ...state, resultListStatus: "pending" };
    });
    builder.addCase(getResultList.fulfilled, (state, action) => {
      return {
        ...state,
        resultList: action.payload,
        resultListStatus: "success",
      };
    });
    builder.addCase(getResultList.rejected, (state) => {
      return {
        ...state,
        resultListStatus: "rejected",
      };
    });
  },
});

export default ResultListReducer.reducer;
