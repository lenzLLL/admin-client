import axios from "axios"
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL,CLEAR_ERRORS,LOAD_USER_FAIL,LOAD_USER_REQUEST,LOAD_USER_SUCCESS} from "../constants/UserConstants"
import URL from "../database_url"


export const login = (email,password) => async (dispatch) => {
   try{
       dispatch({type:LOGIN_REQUEST})
       const config = {headers:{"Content-Type":"application/json"}};
       const {data} = await axios.post(`${URL}user/login-admin`,{email,password},config)
       localStorage.setItem("TOKEN_ECOMMERCE_ADMIN",JSON.stringify(data.token))
       console.log(data)   
       dispatch({type:LOGIN_SUCCESS,payload:data.user})
   }
   catch(error)
   {
    dispatch({type:LOGIN_FAIL,payload:error.response.data.message})
    console.log(error)       
   }
}

export const loadUser = () => async (dispatch) =>{
    try{
        dispatch({type:LOAD_USER_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const {data} = await axios.get(URL+"user/me",{ headers: {"Authorization" : `Bearer ${token}`} })
        console.log(data)
        dispatch({type:LOAD_USER_SUCCESS,payload:data.user})
    }
    catch(error)
    {
        dispatch({type:LOAD_USER_FAIL,payload:error.response.data.message})
    }
}

export const clearError = () => async(dispatch) =>{
    dispatch(
        {
            type:CLEAR_ERRORS
        }
    )

}

