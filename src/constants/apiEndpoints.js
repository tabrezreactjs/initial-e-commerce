export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/users",
    PROFILE: "/auth/profile",
  },

  USERS: {
    ALL: "/users",
    DETAILS: (id) => `/users/${id}`,
  },

  PRODUCTS: {
    ALL: "/products",
    DETAILS: (id) => `/products/${id}`,
  },

  CATEGORIES: {
    ALL: "/categories",
  },
};