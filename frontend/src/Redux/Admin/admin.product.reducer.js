import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./admin.products.actionTypes";

const initialState = {
  data: [],
  isloader: false,
  iserror: false,
};

const Admin_Products_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return { ...state, isloader: true, iserror: false };
    }

    case GET_PRODUCT_SUCCESS: {
      return { ...state, isloader: false, data: payload.data };
    }

    default: {
      return state;
    }
  }
};

export default Admin_Products_reducer;
