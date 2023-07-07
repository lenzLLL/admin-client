import { CHANGE_LINK } from "../constants/linksConstants";


export const changeLink = (link) => async (dispatch) =>{
    try{
        dispatch({type:CHANGE_LINK,payload:link})
    }
    catch(error)
    {
        alert(error)
    }
}