import {UPDATE_PRODUCT_REQUEST,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_RESET, NEW_PRODUCT_FAIL,NEW_PRODUCT_REQUEST,NEW_REVIEW_FAIL,NEW_PRODUCT_RESET, ADMIN_PRODUCT_FAIL,ADMIN_PRODUCT_REQUEST,ADMIN_PRODUCT_SUCCESS, NEW_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_SUCCESS, DETAILS_PRODUCT_REQUEST, DETAILS_PRODUCT_SUCCESS, DETAILS_PRODUCT_FAIL} from "../constants/ProductConstants"
import {NEW_BLOG_FAIL,UPDATE_BLOG_FAIL,UPDATE_BLOG_REQUEST,UPDATE_BLOG_RESET,UPDATE_BLOG_SUCCESS, DETAILS_BLOG_FAIL,DETAILS_BLOG_REQUEST,DETAILS_BLOG_RESET,DETAILS_BLOG_SUCCESS, CLEAR_ERRORS,DELETE_BLOG_FAIL,DELETE_BLOG_REQUEST,DELETE_BLOG_RESET,DELETE_BLOG_SUCCESS, ADMIN_BLOG_FAIL,ADMIN_BLOG_SUCCESS,ADMIN_BLOG_REQUEST, NEW_BLOG_REQUEST,NEW_BLOG_RESET,NEW_BLOG_SUCCESS} from "../constants/BlogConstants"
import axios from "axios"
import URL from "../database_url"
import { UPDATE_PASSWORD_REQUEST } from "../constants/UserConstants"
export const getAdminBlog = () => async(dispatch) =>{
    try{
        dispatch({type:ADMIN_BLOG_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const {data} = await axios.get(`${URL}blog/admin`,{ headers: {"Authorization" : `Bearer ${token}`,"Content-Type":"application/json"} })
        console.log(data)
        dispatch({
            type:ADMIN_BLOG_SUCCESS,
            payload:data
        })

    }
    catch(error)
    {
        dispatch({
            type:ADMIN_BLOG_FAIL,
            payload:error.response.data.message
        })
    }    
}
export const createBlog = (datas) => async(dispatch) =>{
    try{
        dispatch({type:NEW_BLOG_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const  {data} = await axios.post(`${URL}blog`,datas,{ headers: {"Authorization" : `Bearer ${token}`} })
        dispatch({type:NEW_BLOG_SUCCESS,payload:data})
    }   
    catch(error)
    {
        dispatch({type:NEW_BLOG_FAIL,payload:error.response.data.message}) 
    }
}
export const deleteBlog = (id) => async(dispatch) =>{
    try{
        dispatch({type:DELETE_BLOG_REQUEST})
        const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
        const  {data} = await axios.delete(`${URL}blog/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
        dispatch({type:DELETE_BLOG_SUCCESS,payload:data.message})
    }   
    catch(error)
    {
        dispatch({type:DELETE_BLOG_FAIL,payload:error.response.data.message}) 
    }
}
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
 export const updateBlog = (id,data) => async (dispatch) => {
   try{
         dispatch({type:UPDATE_BLOG_REQUEST})
         const token = JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN"))
         const config = {
             headers:{"Content-Type":"application/json","Authorization":`Bearer ${token}`}
         }
         await axios.put(`${URL}blog/${id}`,data,config)
         dispatch({type:UPDATE_BLOG_SUCCESS,payload:true})
     }

         catch(error)
         {
             dispatch({type:UPDATE_BLOG_FAIL,payload:error.response.data.message}) 
         }

 }

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