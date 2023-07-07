import { CHANGE_LINK } from "../constants/linksConstants";

export const linkReducer = (state = {link:{}},action) => {
    switch(action.type){
        case CHANGE_LINK:
            return{
                ...state,
                navlink:action.payload
            }
        default:
            return state    
    }
}