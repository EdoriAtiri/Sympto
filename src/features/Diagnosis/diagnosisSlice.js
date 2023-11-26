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
