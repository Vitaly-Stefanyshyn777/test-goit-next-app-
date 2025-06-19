import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const setAuthHedar = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const login = async (credential) => {
  const { data } = await axios.post("/users/login", credential);
  setAuthHedar(data.token);
  return data;
};

export const register = async (credential) => {
  const { data } = await axios.post("/users/signup", credential);
  setAuthHedar(data.token);
  return data;
};

export const refresh = async () => {
  const { data } = await axios.get("/users/current");
  return data;
};

export const fetchContact = async () => {
  const { data } = await axios.get("/contacts");
  return data;
};

export const addContact = async (contact) => {
  const { data } = await axios.post("/contacts", contact);
  return data;
};

export const deleteContact = async (contactId) => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
