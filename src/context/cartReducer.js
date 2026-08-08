import { CART_ACTIONS } from "../constants/cartActions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { product, quantity } = action.payload;

      const existingItem = state.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return state.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...state,
        {
          ...product,
          quantity,
        },
      ];
    }

    case CART_ACTIONS.REMOVE_FROM_CART:
      return state.filter(
        (item) => item.id !== action.payload
      );

    case CART_ACTIONS.INCREASE_QUANTITY:
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

    case CART_ACTIONS.DECREASE_QUANTITY:
      return state
        .map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);

    case CART_ACTIONS.CLEAR_CART:
      return [];

    default:
      return state;
  }
};