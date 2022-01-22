const initialState = {
  products: [],
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return {
        loading: true,
        products: [],
      };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    default:
      return state;
  }
};
export default productListReducer;
