import {NEW_BLOG_FAIL,DETAILS_BLOG_FAIL,DETAILS_BLOG_REQUEST,DETAILS_BLOG_RESET,DETAILS_BLOG_SUCCESS, UPDATE_BLOG_FAIL,UPDATE_BLOG_REQUEST,UPDATE_BLOG_RESET,UPDATE_BLOG_SUCCESS, DELETE_BLOG_FAIL,DELETE_BLOG_REQUEST,DELETE_BLOG_RESET,DELETE_BLOG_SUCCESS, ADMIN_BLOG_FAIL, ADMIN_BLOG_REQUEST, ADMIN_BLOG_SUCCESS,CLEAR_ERRORS, NEW_BLOG_REQUEST,NEW_BLOG_RESET,NEW_BLOG_SUCCESS} from "../constants/BlogConstants"
import {NEW_PRODUCT_FAIL,DETAILS_PRODUCT_FAIL,DETAILS_PRODUCT_REQUEST,DETAILS_PRODUCT_SUCCESS, NEW_PRODUCT_REQUEST,NEW_PRODUCT_RESET,NEW_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_RESET,DELETE_PRODUCT_SUCCESS ,ADMIN_PRODUCT_FAIL,ADMIN_PRODUCT_REQUEST,ADMIN_PRODUCT_SUCCESS, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, DETAILS_PRODUCT_RESET} from "../constants/ProductConstants"
import { UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_RESET } from "../constants/UserConstants";


export const blogReducer = (
    (state = {blogs:[]},action) =>{
        switch(action.type)
        {
            case ADMIN_BLOG_REQUEST:
                return{
                    ...state,
                    loading:true,
                    blogs:[]
                };
            case ADMIN_BLOG_SUCCESS:
            return {
                ...state,
                loading:false,
                blogs:action.payload,
            };
            case ADMIN_BLOG_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                };
            case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null
                }
           default:
               return state;
        }
    }
)

export const newBlogReducer = (state = { newBlog: {} }, action) => {
    switch (action.type) {
      case NEW_BLOG_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_BLOG_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          newBlog: action.payload.blogs,
        };
      case NEW_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_PRODUCT_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };

export const deleteBlogReducer = (state={deleteBlog:{}},action) => {
  switch (action.type) {
    case DELETE_BLOG_REQUEST:  
      return {
        ...state,
        loading: true,
        isDeleted:false
      };
    case UPDATE_BLOG_REQUEST:
      return {
        ...state,
        isUpdated:false,
        error:null
      }  
    case DELETE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };
    case UPDATE_BLOG_SUCCESS:
      return {
        ...state,
        isUpdated:true,
      } 
      case UPDATE_BLOG_FAIL:
        return {
          ...state,
          isUpdated:false,
          error:action.payload
        } 

    case DELETE_BLOG_RESET:
      return {
        ...state,
        isDeleted:false,
      };
    case UPDATE_BLOG_RESET:
      return {
        ...state,
        isUpdated:false
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }  
}   

export const detailsBlogReducer = (state={detailsBlog:{}},action) => {
  switch(action.type){
    case DETAILS_BLOG_REQUEST:
      return{
          ...state,
          loading:true,
          detailsBlog:null  
      }
    case DETAILS_BLOG_SUCCESS:
      return {
        ...state,
        loading:false,
        detailsBlog:action.payload
      }
    case DETAILS_BLOG_FAIL:
      return {
        ...state,
        loading:false,
        error:action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error:null
      }
    default:
      return state;
  }

}