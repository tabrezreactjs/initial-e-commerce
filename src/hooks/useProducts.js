import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import useDebounce from "./useDebounce";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const PRODUCTS_PER_PAGE = 25;
  const [page, setPage] = useState(1);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts();

      setProducts(data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to fetch products."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    let result = [...products];

    // Search
    if (debouncedSearch.trim()) {
      result = result.filter((product) =>
        product.title
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase())
      )
    }

    // Category
    if (category) {
      result = result.filter((product) =>
        product.category?.id === Number(category)
      );
    }

    // Sorting
    switch (sort) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;

      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;

      case "nameAsc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "nameDesc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;

      default:
        break;
    }

    setFilteredProducts(result);
  }, [products, debouncedSearch, category, sort]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, category, sort]);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(
    totalProducts / PRODUCTS_PER_PAGE
  );

  const currentProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  return {
    products: currentProducts,
    loading,
    error,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    page,
    setPage,
    totalPages,
    totalProducts,
    productsPerPage: PRODUCTS_PER_PAGE,
    fetchProducts,
  }
};

export default useProducts;