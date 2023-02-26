
import {
  LOADING, LOGIN_SUCCESS, ERROR,LOGOUT
} from "./auth.products.actionTypes";
let token=localStorage.getItem("token");
let name=localStorage.getItem("name")
const initialState = {
  token: token || "",
  isloader: false,
  iserror: false,
  name:""
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 
    LOADING: {
      return { ...state, isloader: true, iserror: false };
    }

    case LOGIN_SUCCESS: {
      localStorage.setItem("token",payload.data)
      localStorage.setItem("name",payload.name)
      return { ...state, isloader: false, token: payload.data,name:payload.name };
    }
    case ERROR:{
      return {...state,isloader:false,iserror:true}
    }

    case LOGOUT:{
      localStorage.clear()
      return {...state,token:"",name:""}
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
