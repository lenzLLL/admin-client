import {UPDATE_PRODUCT_REQUEST,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_RESET,NEW_PRODUCT_REQUEST,NEW_REVIEW_FAIL,ADMIN_PRODUCT_FAIL,ADMIN_PRODUCT_REQUEST,ADMIN_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_SUCCESS, DETAILS_PRODUCT_REQUEST, DETAILS_PRODUCT_SUCCESS, DETAILS_PRODUCT_FAIL} from "../constants/ProductConstants"
import {ALL_PC_FAIL,DELETE_PC_FAIL,DELETE_PC_REQUEST,DELETE_PC_RESET,DELETE_PC_SUCCESS, ALL_PC_REQUEST,ALL_PC_SUCCESS, NEW_PC_FAIL,CLEAR_ERRORS,NEW_PC_RESET,NEW_PC_SUCCESS,NEW_PC_REQUEST } from "../constants/productCategoryConstant"
import axios from "axios"
import URL from "../database_url"
import { UPDATE_PASSWORD_REQUEST } from "../constants/UserConstants"
export const getAllPc = () => async(dispatch) =>{
    try{
        dispatch({type:ALL_PC_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const {data} = await axios.get(`${URL}category`,{ headers: {"Authorization" : `Bearer ${token}`,"Content-Type":"application/json"} })
        dispatch({
            type:ALL_PC_SUCCESS,
            payload:data
        })

    }
    catch(error)
    {
        dispatch({
            type:ALL_PC_FAIL,
            payload:error.response.data.message
        })
    }    
}
export const createPc = (datas) => async(dispatch) =>{
    try{
        dispatch({type:NEW_PC_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const  {data} = await axios.post(`${URL}category`,datas,{ headers: {"Authorization" : `Bearer ${token}`} })
        dispatch({type:NEW_PC_SUCCESS,payload:data})
    }   
    catch(error)
    {
        dispatch({type:NEW_PC_FAIL,payload:error.response.data.message}) 
    }
}
export const deletePc = (id) => async(dispatch) =>{
    try{
        dispatch({type:DELETE_PC_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const  {data} = await axios.delete(`${URL}category/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
        dispatch({type:DELETE_PC_SUCCESS,payload:data.message})
    }   
    catch(error)
    {
        dispatch({type:DELETE_PC_FAIL,payload:error.response.data.message}) 
    }
}
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
// export const updateproduct = (id,data) => async (dispatch) => {
//     try{
//         dispatch({type:UPDATE_PRODUCT_REQUEST})
//         const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
//         const config = {
//             headers:{"Content-Type":"application/json","Authorization":`Bearer ${token}`}
//         }
//         const {data} = await axios.put(`${URL}product/${id}`,data,config)
//         dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:true})
//     }

//         catch(error)
//         {
//             dispatch({type:UPDATE_PRODUCT_FAIL,payload:error.response.data.message}) 
//         }

// }

export const updateproduct = (id,datas) => async(dispatch) =>{
    try{
        dispatch({type:UPDATE_PRODUCT_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const  {data} = await axios.put(`${URL}product/${id}`,datas,{ headers: {"Content-Type":"application/json","Authorization" : `Bearer ${token}`} })
        dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:data.message})
    }   
    catch(error)
    {
        dispatch({type:UPDATE_PRODUCT_FAIL,payload:error.response.data.message}) 
    }
}

export const detailsProductAction = (id) => async (dispatch) => {
    try{
        dispatch({type:DETAILS_PRODUCT_REQUEST})
        const config = {
             headers:{"Content-Type":"application/json"}
        }
        const {data} = await axios.get(`${URL}product/${id}`)
        dispatch({type:DETAILS_PRODUCT_SUCCESS,payload:data})
    }
    catch(error)
    {
        dispatch({type:DETAILS_PRODUCT_FAIL, payload:error.response.data.message})
    }
}