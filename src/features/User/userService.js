import axios from "axios";
const API_URL = import.meta.env.VITE_BASEURL;

// create user profile
const createProfile = async (userData, token) => {
  console.log(userData, token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    "https://askdoc.onrender.com/askdoc/v1/create/user/profile",
    userData,
    config,
  );

  console.log(response);

  return response.data;
};

const getUserProfile = async (user, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}profile/get/${user}`, config);

  console.log(response);

  return response.data;
};

const authService = {
  createProfile,
  getUserProfile,
};

export default authService;
