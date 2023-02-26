import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  LOADING, LOGIN_SUCCESS, ERROR ,REGISTER_SUCCESS,LOGOUT
} from "./auth.products.actionTypes";
//?category=${ProductCategory}
export const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
   let data= await axios.post(`https://good-gray-drill-hose.cyclic.app/users/login`,credentials)
   if(data.data==="wrong password"){
     console.log("Wrong password")
     dispatch({type:ERROR})
    }else if(data.data==="Wrong Credentials"){
      console.log("Wrong Credentials")
      dispatch({type:ERROR})
  }else{
    dispatch({type: LOGIN_SUCCESS,payload: {data: data.data.token,name:data.data.name}})
      console.log("signed in",data.data)
   }
  } catch (e) {
    dispatch({type: ERROR});
    console.log(e);
  }
};
export const register = (credentials) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
   let data= await axios.post(`https://good-gray-drill-hose.cyclic.app/users/register`,credentials)
   if(data.data=="successfully registered"){
    console.log("user registered successfully")
     dispatch(login({email:credentials.email,password:credentials.password}))
   }else if (data.data=="User already registered"){
    dispatch({type: ERROR});
      console.log("User is already registered")
   }else{
    dispatch({type: ERROR});
     console.log("Error")
   }
  } catch (e) {
    dispatch({type: ERROR});
    console.log(e)
  }
};
export const logout={type:LOGOUT}
