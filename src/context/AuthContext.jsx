import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../services/authService";
import { storage } from "../utils/storage";
import { STORAGE_KEYS } from "../constants/storageKeys";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const token = storage.get(STORAGE_KEYS.ACCESS_TOKEN);

      if (!token) {
        setLoading(false);
        return;
      }

      const profile = await authService.getProfile();

      setUser(profile);
    } catch (error) {
      storage.remove(STORAGE_KEYS.ACCESS_TOKEN);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    const response = await authService.login(email, password);

    storage.set(STORAGE_KEYS.ACCESS_TOKEN, response.access_token);

    const profile = await authService.getProfile();

    setUser(profile);

    // Optional: cache the user locally
    storage.set(STORAGE_KEYS.USER, profile);
  }

  async function signup(userData) {
    return authService.signup(userData);
  }

  function logout() {
  storage.remove(STORAGE_KEYS.ACCESS_TOKEN);
  storage.remove(STORAGE_KEYS.USER);

  setUser(null);
}

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);