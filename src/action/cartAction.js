import axios from "axios";

export const cartAction = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);

  dispatch({
    type: "Cart_ADD_ITEMS",
    payload: {
      product: data._id,
      image: data.image,
      price: data.price,
      name: data.name,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeCartAction = (id) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_CART_ITEM", payload: id });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
