import { useMutation } from "@tanstack/react-query";
import axios from "axios";

axios.defaults.baseURL = "https://675994a9099e3090dbe22f18.mockapi.io";

export const setAuthHedar = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// export const fetchCo = async (credential) => {
//   const { data } = await axios.post("/users/login", credential);
//   setAuthHedar(data.token);
//   return data;
// };

export const fetchContact = async () => {
  const { data } = await axios.get("/contact");
  return data;
};

// export const fetchContact = async (onSeCcses, onError) => useMutation({

// })
