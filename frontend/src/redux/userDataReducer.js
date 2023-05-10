import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token"),
  data: {},
  loading: false,
  error: false,
  success: false,
  message: "",
};

export const getUserData = createAsyncThunk(
  "userData/requestStatus",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/api/userData", {
        token: window.localStorage.getItem("token"),
      });

      return response.data;
    } catch (err) {
      const message = err.response.data || err.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userDataReducer = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.success = true;
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
      state.data = [];
    });
  },
});

export default userDataReducer.reducer;
