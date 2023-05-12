import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  data: {},
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name: user.name,
        email: user.email,
        password: user.password,
      });

      localStorage.setItem("token", response.data.token);

      return response.data.token;
    } catch (err) {
      const message = err.response.data || err.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: user.email,
        password: user.password,
      });

      localStorage.setItem("token", response.data.token);

      return response.data.token;
    } catch (err) {
      const message = err.response.data || err.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);

        return {
          ...state,
          token,
          data: user,
          userLoaded: true,
        };
      }
    },
    logoutUser(state) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        data: {},
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    //register user
    builder.addCase(registerUser.pending, (state) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          token: action.payload,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });

    //login user
    builder.addCase(loginUser.pending, (state) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          token: action.payload,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authReducer.actions;
export default authReducer.reducer;
