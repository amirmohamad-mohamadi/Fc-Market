import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import productListReducer from "./reducer/productListReducer";
import productDetailReducer from "./reducer/productReducer";
import cartReducer from "./reducer/cartReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
