import {NEW_BLOG_FAIL,DETAILS_BLOG_FAIL,DETAILS_BLOG_REQUEST,DETAILS_BLOG_RESET,DETAILS_BLOG_SUCCESS,UPDATE_BLOG_REQUEST,UPDATE_BLOG_RESET,UPDATE_BLOG_SUCCESS, DELETE_BLOG_FAIL,DELETE_BLOG_REQUEST,DELETE_BLOG_RESET,DELETE_BLOG_SUCCESS, ADMIN_BLOG_FAIL, ADMIN_BLOG_REQUEST, ADMIN_BLOG_SUCCESS, NEW_BLOG_REQUEST,NEW_BLOG_RESET,NEW_BLOG_SUCCESS} from "../constants/BlogConstants"
import { UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_RESET } from "../constants/UserConstants";
import {DELETE_BRAND_FAIL,UPDATE_BRAND_REQUEST,UPDATE_BRAND_SUCCESS,UPDATE_BRAND_FAIL,UPDATE_BRAND_RESET, DELETE_BRAND_REQUEST,DELETE_BRAND_RESET,DELETE_BRAND_SUCCESS, NEW_BRAND_FAIL,CLEAR_ERRORS, ALL_BRAND_FAIL,ALL_BRAND_REQUEST,ALL_BRAND_SUCCESS, NEW_BRAND_REQUEST,NEW_BRAND_RESET,NEW_BRAND_SUCCESS} from "../constants/BrandConstant"


export const brandReducer = (
    (state = {brands:[]},action) =>{
        switch(action.type)
        {
            case ALL_BRAND_REQUEST:
                return{
                    ...state,
                    loading:true,
                    brands:[]
                };
            case ALL_BRAND_SUCCESS :
            return {
                ...state,
                loading:false,
                brands:action.payload,
            };
            case ALL_BRAND_FAIL:
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

export const newBrandReducer = (state = { newBrand: {} }, action) => {
    switch (action.type) {
      case NEW_BRAND_REQUEST:
        return {
          ...state,
          loading: true,
          success:false
        };
      case NEW_BRAND_SUCCESS:
        return {
          loading: false,
          success: true,
          newBrand: action.payload.blogs,
        };
      case NEW_BRAND_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_BRAND_RESET:
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

export const deleteBrandReducer = (state={deleteBrand:{}},action) => {
  switch (action.type) {
    case DELETE_BRAND_REQUEST:  
      return {
        ...state,
        loading: true,
        isDeleted:false
      };
    case UPDATE_BRAND_REQUEST:
      return {
        ...state,
        isUpdated:false,
        error:null
      }  
    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };
    case UPDATE_BRAND_SUCCESS:
      return {
        ...state,
        isUpdated:true,
      } 
      case UPDATE_BRAND_FAIL:
        return {
          ...state,
          isUpdated:false,
          error:action.payload
        } 

    case DELETE_BRAND_RESET:
      return {
        ...state,
        isDeleted:false,
      };
    case UPDATE_BRAND_RESET:
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