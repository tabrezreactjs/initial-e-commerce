import React, { useCallback, useEffect, useState } from 'react'
import { getProductsById } from '../services/productService';

const useProductDetails = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProductsById(id);

      setProduct(data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to load product."
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return {
    product,
    loading,
    error,
    refetch: fetchProduct,
  };
};

export default useProductDetails