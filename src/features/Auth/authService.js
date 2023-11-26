import axios from "axios";
const API_URL = import.meta.env.VITE_BASEURL;

// Signup user
const register = async (data) => {
  console.log(data);
  const response = await axios.post(`${API_URL}register_user/`, data);

  console.log(response);

  return response.data;
};

// Login user
const login = async (data) => {
  const response = await axios.post(API_URL + "authenticate/user/login", data);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  console.log(response);

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userData");
};
// const logout = async (user) => {
//   const response = await axios.post(API_URL + "authenticate/user/logout", data);

//   localStorage.removeItem("user");

//   console.log(response);

//   return response.data;
// };

const authService = {
  register,
  login,
  logout,
};

export default authService;
