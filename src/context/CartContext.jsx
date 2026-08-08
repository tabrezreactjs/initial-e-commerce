import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState, } from "react";
import { storage } from "../utils/storage";
import { cartReducer } from "./cartReducer";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { CART_ACTIONS } from "../constants/cartActions";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(
    cartReducer,
    storage.get(STORAGE_KEYS.CART) || []
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    storage.set(STORAGE_KEYS.CART, cart);
  }, [cart]);

  const addToCart = useCallback((product, quantity = 1) => {
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: {
        product,
        quantity,
      },
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: id,
    });
  }, []);

  const increaseQuantity = useCallback((id) => {
    dispatch({
      type: CART_ACTIONS.INCREASE_QUANTITY,
      payload: id,
    });
  }, []);

  const decreaseQuantity = useCallback((id) => {
    dispatch({
      type: CART_ACTIONS.DECREASE_QUANTITY,
      payload: id,
    });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({
      type: CART_ACTIONS.CLEAR_CART,
    });
  }, []);

  const totalItems = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cart]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
      totalItems,
      totalPrice,
      loading,
    }),
    [cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, totalItems, totalPrice, loading]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);