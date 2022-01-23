const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Cart_ADD_ITEMS":
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === existingItem.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };

    default:
      return state;
  }
};
export default cartReducer;
