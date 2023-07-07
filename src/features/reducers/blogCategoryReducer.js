import {DETAILS_PRODUCT_FAIL,DETAILS_PRODUCT_REQUEST,DETAILS_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_RESET,DELETE_PRODUCT_SUCCESS,ADMIN_PRODUCT_FAIL,ADMIN_PRODUCT_REQUEST,ADMIN_PRODUCT_SUCCESS, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, DETAILS_PRODUCT_RESET} from "../constants/ProductConstants"
import { UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_RESET } from "../constants/UserConstants";
import {NEW_BC_FAIL,DELETE_BC_FAIL,DELETE_BC_REQUEST,DELETE_BC_RESET,DELETE_BC_SUCCESS, ALL_BC_FAIL,ALL_BC_REQUEST,ALL_BC_SUCCESS,NEW_BC_REQUEST,NEW_BC_RESET,NEW_BC_SUCCESS,CLEAR_ERRORS} from "../constants/blogCategoryConstant"


export const bcReducer = (
    (state = {bcs:[]},action) =>{
        switch(action.type)
        {
            case ALL_BC_REQUEST:
                return{
                    ...state,
                    loading:true,
                    bcs:[]
                };
            case ALL_BC_SUCCESS:
            return {
                ...state,
                loading:false,
                bcs:action.payload,
            };
            case ALL_BC_FAIL:
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

export const newBcReducer = (state = { newBc: {} }, action) => {
    switch (action.type) {
      case NEW_BC_REQUEST:
        return {
          ...state,
          loading: true,
          error:null
        };
      case NEW_BC_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          newBc: action.payload.product,
          error:null
        };
      case NEW_BC_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_BC_RESET:
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

export const deleteBcReducer = (state={deleteBc:{}},action) => {
  switch (action.type) {
    case DELETE_BC_REQUEST:  
      return {
        ...state,
        loading: true,
        isDeleted:false
      };
    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        isUpdated:false
      }  
    case DELETE_PRODUCT_SUCCESS:
      return {
        loading: false,
        isDeleted: true,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        isUpdated:true,
      }  
    case DELETE_BC_FAIL:
      return {
        ...state,
        loading: false,
        isDeleted:false,
        error: action.payload,
      }; 
    case DELETE_BC_RESET:
      return {
        ...state,
        isDeleted:false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }  
}   

export const detailsProductReducer = (state={detailsProduct:{}},action) => {
  switch(action.type){
    case DETAILS_PRODUCT_REQUEST:
      return{
          ...state,
          loading:true,
          detailsProduct:null  
      }
    case DETAILS_PRODUCT_SUCCESS:
      return {
        ...state,
        loading:false,
        detailsProduct:action.payload
      }
    case DETAILS_PRODUCT_FAIL:
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