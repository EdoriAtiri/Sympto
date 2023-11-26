import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import diagnosisService from "./diagnosisService";
// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  conversation: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

// Start Diagnosis
export const startDiagnosis = createAsyncThunk(
  "diagnosis/start",
  async (userData, thunkAPI) => {
    const token = thunkAPI.getState().auth.userAuth.tokens.access;
    try {
      return await diagnosisService.startDiagnosis(userData, token);
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

export const diagnosisSlice = createSlice({
  name: "diagnosis",
  initialState,
  reducers: {
    reset: (state) => {
      //   state.diagnosis = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(startDiagnosis.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(startDiagnosis.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const user = `${action.payload.problem}. ${action.payload.problem}. ${action.payload.medical_history}`;
        const data = {
          user: user,
          askDoc: action.payload.response,
        };
        state.diagnosis = [...action.payload, data];
      })
      .addCase(startDiagnosis.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = diagnosisSlice.actions;
export default diagnosisSlice.reducer;
