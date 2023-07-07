import {CLEAR_ERRORS,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL, LOAD_USER_FAIL,LOAD_USER_REQUEST,LOAD_USER_SUCCESS} from "../constants/UserConstants"


export const userReducer = (state={user:{}},action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                isLoading:true,
                isAuthentificated:false,
                isRegister:false
            }
        case LOGIN_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isAuthentificated:true,
                isRegister:false,
                user: action.payload
        
                    }
        case LOAD_USER_FAIL:
            return{
                loading:false,
                isAuthentificated:false,
                user: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading:false,
                isAuthentificated:false,
                user: null,
                error:action.payload,
                isRegister:false
            }
        case  CLEAR_ERRORS :
                return{
                ...state,
                error:null
                }
        default:
                return state

            
    } 
}