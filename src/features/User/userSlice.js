import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create user profile
export const createProfile = createAsyncThunk(
  "user/create",
  async (userData, thunkAPI) => {
    const currentUser = { ...userData };
    const user = thunkAPI.getState().auth.userAuth.user;
    currentUser.user = user;
    const token = thunkAPI.getState().auth.userAuth.tokens.access;
    // console.log(currentUser);

    try {
      return await userService.createProfile(currentUser, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(message);

      return thunkAPI.rejectWithValue(message);
    }
  },
);

// get user profile
export const getUserProfile = createAsyncThunk(
  "user/get",
  async (_, thunkAPI) => {
    const user = thunkAPI.getState().auth.userAuth.user;
    const token = thunkAPI.getState().auth.userAuth.tokens.access;

    try {
      return await userService.getUserProfile(user, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(message);

      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
