import {NEW_BLOG_FAIL,UPDATE_BLOG_FAIL,UPDATE_BLOG_REQUEST,UPDATE_BLOG_RESET,UPDATE_BLOG_SUCCESS, DETAILS_BLOG_FAIL,DETAILS_BLOG_REQUEST,DETAILS_BLOG_RESET,DETAILS_BLOG_SUCCESS, CLEAR_ERRORS,DELETE_BLOG_FAIL,DELETE_BLOG_REQUEST,DELETE_BLOG_RESET,DELETE_BLOG_SUCCESS, ADMIN_BLOG_FAIL,ADMIN_BLOG_SUCCESS,ADMIN_BLOG_REQUEST, NEW_BLOG_REQUEST,NEW_BLOG_RESET,NEW_BLOG_SUCCESS} from "../constants/BlogConstants"
import {NEW_BRAND_FAIL,UPDATE_BRAND_FAIL,UPDATE_BRAND_REQUEST,UPDATE_BRAND_SUCCESS, DELETE_BRAND_REQUEST,DELETE_BRAND_FAIL,DELETE_BRAND_SUCCESS,ALL_BRAND_SUCCESS,ALL_BRAND_FAIL,ALL_BRAND_REQUEST, NEW_BRAND_REQUEST,NEW_BRAND_SUCCESS} from "../constants/BrandConstant"
import axios from "axios"
import URL from "../database_url"
import { UPDATE_PASSWORD_REQUEST } from "../constants/UserConstants"
export const getBrand = () => async(dispatch) =>{
    try{
        dispatch({type:ADMIN_BLOG_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const {data} = await axios.get(`${URL}brand`,{ headers: {"Authorization" : `Bearer ${token}`,"Content-Type":"application/json"} })
        dispatch({
            type:ALL_BRAND_SUCCESS,
            payload:data
        })

    }
    catch(error)
    {
        dispatch({
            type:ALL_BRAND_FAIL,
            payload:error.response.data.message
        })
    }    
}
export const createBrand = (datas) => async(dispatch) =>{
    try{
        dispatch({type:NEW_BRAND_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const  {data} = await axios.post(`${URL}brand`,datas,{ headers: {"Authorization" : `Bearer ${token}`} })
        dispatch({type:NEW_BRAND_SUCCESS,payload:data})
    }   
    catch(error)
    {
        dispatch({type:NEW_BRAND_FAIL,payload:error.response.data.message}) 
    }
}
export const deleteBrand = (id) => async(dispatch) =>{
    try{
        dispatch({type:DELETE_BRAND_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const  {data} = await axios.delete(`${URL}brand/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
        dispatch({type:DELETE_BRAND_SUCCESS})
    }   
    catch(error)
    {
        dispatch({type:DELETE_BRAND_FAIL,payload:error.response.data.message}) 
    }
}
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
 export const updateBrand = (id,data) => async (dispatch) => {
   try{
         dispatch({type:UPDATE_BRAND_REQUEST})
         const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
         const config = {
             headers:{"Content-Type":"application/json","Authorization":`Bearer ${token}`}
         }
         await axios.put(`${URL}brand/${id}`,data,config)
         dispatch({type:UPDATE_BRAND_SUCCESS,payload:true})
     }

         catch(error)
         {
             dispatch({type:UPDATE_BRAND_FAIL,payload:error.response.data.message}) 
         }


        }
export const detailsBlogAction = (id) => async (dispatch) => {
    try{
        dispatch({type:DETAILS_BLOG_REQUEST})
        const config = {
             headers:{"Content-Type":"application/json"}
        }
        const {data} = await axios.get(`${URL}blog/${id}`)
        dispatch({type:DETAILS_BLOG_SUCCESS,payload:data})
    }
    catch(error)
    {
        dispatch({type:DETAILS_BLOG_FAIL, payload:error.response.data.message})
    }
}