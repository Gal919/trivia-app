import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: false,
  success: false,
  message: "",
  index: 0,
};

export const getTriviaData = createAsyncThunk(
  "triviaData/requestStatus",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=5&difficulty=medium"
      );

      return response.data;
    } catch (err) {
      const message = err.response.data || err.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const triviaDataReducer = createSlice({
  name: "triviaData",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
    },
    updateIndex: (state) => {
      return {
        ...state,
        index: state.index + 1,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTriviaData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTriviaData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
      })
      .addCase(getTriviaData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.data = [];
      });
  },
});

export const { updateIndex } = triviaDataReducer.actions;
export default triviaDataReducer.reducer;
