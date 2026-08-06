import api from "./api";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

export const login = async (email, password) => {
  const { data } = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
    email,
    password,
  });

  return data;
};

export const getProfile = async () => {
  const { data } = await api.get(API_ENDPOINTS.AUTH.PROFILE);

  return data;
};

export const signup = async (userData) => {
  const { data } = await api.post(API_ENDPOINTS.USERS.CREATE, userData);

  return data;
};