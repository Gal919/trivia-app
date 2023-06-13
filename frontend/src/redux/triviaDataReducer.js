import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  categories: [],
  error: false,
  dataSuccess: false,
  categorySuccess: false,
  message: "",
  index: 0,
  category: "",
};

export const getTriviaData = createAsyncThunk(
  "triviaData/requestStatus",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const response = await axios.get(
        `https://the-trivia-api.com/api/questions?categories=${state.triviaData.category}&limit=5&difficulty=medium`
      );

      return response.data;
    } catch (err) {
      const message = err.response.data || err.message;

      return rejectWithValue(message);
    }
  }
);

export const getTriviaCategories = createAsyncThunk(
  "triviaCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://the-trivia-api.com/api/categories"
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
    updateCategory: (state, action) => {
      return {
        ...state,
        category: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      //trivia data
      .addCase(getTriviaData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTriviaData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.dataSuccess = true;
      })
      .addCase(getTriviaData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.data = [];
      })

      //trivia categories
      .addCase(getTriviaCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTriviaCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.categorySuccess = true;
      })
      .addCase(getTriviaCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.data = [];
      });
  },
});

export const { updateIndex, updateCategory } = triviaDataReducer.actions;
export default triviaDataReducer.reducer;
