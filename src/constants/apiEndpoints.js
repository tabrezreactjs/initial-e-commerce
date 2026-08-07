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
    DETAILS: (id) => `/products/${id}`,
  },

  CATEGORIES: {
    ALL: "/categories",
  },
};