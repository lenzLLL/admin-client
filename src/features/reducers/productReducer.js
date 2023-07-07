import {NEW_PRODUCT_FAIL,DETAILS_PRODUCT_FAIL,DETAILS_PRODUCT_REQUEST,DETAILS_PRODUCT_SUCCESS, NEW_PRODUCT_REQUEST,NEW_PRODUCT_RESET,NEW_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_RESET,DELETE_PRODUCT_SUCCESS, CLEAR_ERRORS ,ADMIN_PRODUCT_FAIL,ADMIN_PRODUCT_REQUEST,ADMIN_PRODUCT_SUCCESS, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, DETAILS_PRODUCT_RESET} from "../constants/ProductConstants"
import { UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_RESET } from "../constants/UserConstants";



export const productReducer = (
    (state = {products:[]},action) =>{
        switch(action.type)
        {
            case ADMIN_PRODUCT_REQUEST:
                return{
                    loading:true,
                    products:[]
                };
            case ADMIN_PRODUCT_SUCCESS:
            return {
                loading:false,
                products:action.payload,
            };
            case ADMIN_PRODUCT_FAIL:
                return{
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

export const newProductReducer = (state = { newProduct: {} }, action) => {
    switch (action.type) {
      case NEW_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_PRODUCT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          newProduct: action.payload.product,
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

export const deleteProductReducer = (state={deleteProduct:{}},action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:  
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
    case DELETE_PRODUCT_FAIL:
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
    case DELETE_PRODUCT_RESET:
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