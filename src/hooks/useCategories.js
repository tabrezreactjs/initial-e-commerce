import React, { useCallback, useEffect, useState } from 'react'
import { getCategories } from '../services/productService';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getCategories();

      setCategories(data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to fetch categories."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  
  return {
    categories,
    loading,
    error,
  };
};

export default useCategories