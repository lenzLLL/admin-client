import {UPDATE_PRODUCT_REQUEST, CLEAR_ERRORS,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_RESET, NEW_PRODUCT_FAIL,NEW_PRODUCT_REQUEST,NEW_REVIEW_FAIL,NEW_PRODUCT_RESET, ADMIN_PRODUCT_FAIL,ADMIN_PRODUCT_REQUEST,ADMIN_PRODUCT_SUCCESS, NEW_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_SUCCESS, DETAILS_PRODUCT_REQUEST, DETAILS_PRODUCT_SUCCESS, DETAILS_PRODUCT_FAIL} from "../constants/ProductConstants"
import axios from "axios"
import URL from "../database_url"
import { UPDATE_PASSWORD_REQUEST } from "../constants/UserConstants"
export const getAdminProduct = () => async(dispatch) =>{
    try{
        dispatch({type:ADMIN_PRODUCT_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const {data} = await axios.get(`${URL}product/admin`,{ headers: {"Authorization" : `Bearer ${token}`,"Content-Type":"application/json"} })
        console.log(data.products)
        dispatch({
            type:ADMIN_PRODUCT_SUCCESS,
            payload:data.products
        })

    }
    catch(error)
    {
        dispatch({
            type:ADMIN_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }    
}
export const createProduct = (datas) => async(dispatch) =>{
    try{
        dispatch({type:NEW_PRODUCT_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const  {data} = await axios.post(`${URL}product`,datas,{ headers: {"Authorization" : `Bearer ${token}`} })
        dispatch({type:NEW_PRODUCT_SUCCESS,payload:data})
    }   
    catch(error)
    {
        dispatch({type:NEW_PRODUCT_FAIL,payload:error.response.data.message}) 
    }
}
export const deleteProduct = (id) => async(dispatch) =>{
    try{
        dispatch({type:DELETE_PRODUCT_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const  {data} = await axios.delete(`${URL}product/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:data.message})
    }   
    catch(error)
    {
        dispatch({type:DELETE_PRODUCT_FAIL,payload:error.response.data.message}) 
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