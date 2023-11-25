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
  "auth/register",
  async (userData, thunkAPI) => {
    const currentUser = thunkAPI.getState.userAuth;
    userData.user = currentUser;
    try {
      return await userService.createProfile(userData);
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

export const authSlice = createSlice({
  name: "auth",
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
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
