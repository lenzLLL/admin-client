import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {userReducer} from "../features/reducers/userReducer"
import { linkReducer } from "../features/reducers/linksReducer"
import { productReducer,newProductReducer,deleteProductReducer, detailsProductReducer } from "../features/reducers/productReducer"
import {newBlogReducer,detailsBlogReducer, blogReducer,deleteBlogReducer} from "../features/reducers/blogReducer"
import { brandReducer, deleteBrandReducer, newBrandReducer } from "../features/reducers/brandReducer"
import { newPcReducer, pcReducer } from "../features/reducers/producCategoryReducer"
import { bcReducer, newBcReducer } from "../features/reducers/blogCategoryReducer"

const reducer = combineReducers({
    user:userReducer,
    link:linkReducer,
    products:productReducer,
    newProduct:newProductReducer,
    deleteProduct:deleteProductReducer,
    detailsProduct:detailsProductReducer,
    newBlog:newBlogReducer,
    blogs:blogReducer,
    deleteBlog:deleteBlogReducer,
    detailsBlog:detailsBlogReducer,
    newBrand:newBrandReducer,
    brands:brandReducer,
    deleteBrand:deleteBrandReducer,
    newPc:newPcReducer,
    newBc:newBcReducer,
    pcs:pcReducer,
    bcs:bcReducer
 
})

let initialeState = {
    link:{
        navlink:"/"
    }
}
const middleware = [thunk]

const store = createStore(reducer,initialeState,composeWithDevTools(applyMiddleware(...middleware)))

export default store