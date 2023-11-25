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
    API_URL + "create/user/profile/",
    userData,
    config,
  );

  console.log(response);

  return response.data;
};

const authService = {
  createProfile,
};

export default authService;
