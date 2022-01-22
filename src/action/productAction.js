import axios from "axios";

const productDetilAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT-DETAIL_REQUEST" });
    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}`
    );
    dispatch({ type: "PRODUCT-DETAIL_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export default productDetilAction;
