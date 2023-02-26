import axios from "axios";
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./admin.products.actionTypes";
//?category=${ProductCategory}
export const getData = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    axios
      .get(
        `https://good-gray-drill-hose.cyclic.app/items/?category=new`
      )
      .then((res) =>{
        dispatch({
          type: GET_PRODUCT_SUCCESS,
          payload: {
            data: res.data,
            iserror: false,
          },
        })}
      );
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: {
        data: [],
        iserror: true,
      },
    });
    console.log(e);
  }
};
