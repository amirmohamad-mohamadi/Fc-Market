const initialState = {
  product: {},
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT-DETAIL_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "PRODUCT-DETAIL_SUCCESS":
      return {
        loading: false,
        product: action.payload,
      };
    default:
      return state;
  }
};
export default productDetailReducer;
