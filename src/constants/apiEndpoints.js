export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    PROFILE: "/auth/profile",
  },

  USERS: {
    CREATE: "/users",
  },

  PRODUCTS: {
    ALL: "/products",
    BY_ID: (id) => `/products/${id}`,
  },

  CATEGORIES: {
    ALL: "/categories",
  },
};