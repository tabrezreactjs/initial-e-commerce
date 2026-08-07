import api from "./api"
import { API_ENDPOINTS } from "../constants/apiEndpoints"

export const getProducts = async (param = {}) => {
  const { data } = await api.get(API_ENDPOINTS.PRODUCTS.ALL, {
    param,
  });

  return data;
}

export const getProductsById = async (id) => {
  const { data } = await api.get(API_ENDPOINTS.PRODUCTS.DETAILS(id));

  return data;
}

export const getCategories = async () => {
  const { data } = await api.get(API_ENDPOINTS.CATEGORIES.ALL);

  return data;
}