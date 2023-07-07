import {DETAILS_PRODUCT_FAIL,DETAILS_PRODUCT_REQUEST,DETAILS_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_RESET,DELETE_PRODUCT_SUCCESS,ADMIN_PRODUCT_FAIL,ADMIN_PRODUCT_REQUEST,ADMIN_PRODUCT_SUCCESS, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, DETAILS_PRODUCT_RESET} from "../constants/ProductConstants"
import { UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_RESET } from "../constants/UserConstants";
import {NEW_PC_FAIL,DELETE_PC_FAIL,DELETE_PC_REQUEST,DELETE_PC_RESET,DELETE_PC_SUCCESS, ALL_PC_FAIL,ALL_PC_REQUEST,ALL_PC_SUCCESS,CLEAR_ERRORS,NEW_PC_RESET,NEW_PC_SUCCESS,NEW_PC_REQUEST} from "../constants/productCategoryConstant"



export const pcReducer = (
    (state = {pcs:[]},action) =>{
        switch(action.type)
        {
            case ALL_PC_REQUEST:
                return{
                    ...state,
                    loading:true,
                    pcs:[]
                };
            case ALL_PC_SUCCESS:
            return {
                ...state,
                loading:false,
                pcs:action.payload,
            };
            case ALL_PC_FAIL:
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

export const newPcReducer = (state = { newPc: {} }, action) => {
    switch (action.type) {
      case NEW_PC_REQUEST:
        return {
          ...state,
          loading: true,
          success:false
        };
      case NEW_PC_SUCCESS:
        return {
          loading: false,
          success:true,
          newPc: action.payload.product,
        };
      case NEW_PC_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_PC_RESET:
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

export const deletePcReducer = (state={deletePc:{}},action) => {
  switch (action.type) {
    case DELETE_PC_REQUEST:  
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
    case DELETE_PC_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        isUpdated:true,
      }  
    case DELETE_PC_FAIL:
      return {
        ...state,
        loading: false,
        isDeleted:false,
        error: action.payload,
      };
    case UPDATE_PASSWORD_FAIL:
       return {
         ...state,
         loading:false,
         isUpdated:false,
         error:action.payload
       } 
    case DELETE_PC_RESET:
      return {
        ...state,
        isDeleted:false,
      };
    case UPDATE_PASSWORD_RESET:
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