import axios from "axios";
const API_URL = import.meta.env.VITE_BASEURL;

// Signup user
const createProfile = async (userData) => {
  const response = await axios.post(API_URL + "create/user/profile/", userData);

  console.log(response);

  return response.data;
};

const authService = {
  createProfile,
};

export default authService;
