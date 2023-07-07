import React,{useEffect} from 'react'
import Sidebar from '../smallComponents/sidebar'
import Header from '../smallComponents/header'
import {Routes,Route} from "react-router-dom"
import Accueil from '../homeComponents/Accueil'
import Product from '../product/Product'
import NewProduct from '../product/NewProduct'
import UpdateProduct from '../product/UpdateProduct'
import Blog from '../blog/Blog'
import Lottie from "react-lotties"
import NewBlog from "../blog/NewBlog"
import  {useNavigate} from "react-router-dom"
import UpdateBlog from '../blog/UpdateBlog'
import Brand from '../brand/Brand'
import NewBrand from '../brand/NewBrand'
import UpdateBrand from '../brand/UpdateBrand'
import NewProductCategory from '../category/NewProductCategory'
import NewBlogCategory from '../category/NewBlogCategory'
import Categories from '../category/CategoriesProduct'
import CategorieProduit from '../category/CategoriesProduct'
import CategorieBlog from '../category/CategoriesBlog'

export default function Home() {

const history = useNavigate()

 useEffect(
    ()=>{
       if(!JSON.parse(localStorage.getItem("TOKEN_ECOMMERCE_ADMIN")))
       {
           history("/login") 
       }   
    },[]
  )
  return (
    <div className='flex h-screen items-start justify-start p-0 m-0'>
     
          <Sidebar/>

      <div className='w-1/5'></div>
      <div className='w-4/5 flex-1  flex h-auto flex-col '>
      <Header/>
      
      <div className='h-full '>
        <Routes>
            <Route path = "/" element = {<Accueil lp = {3}/>}/>
            <Route path ="/products" element = {<Product/>}/>
            <Route path = "/newproduct" element = {<NewProduct/>}/>
            <Route path = "/updateproduct/:id" element = {<UpdateProduct/>}/>
            <Route path = "/newblog" element = {<NewBlog/>}/>
            <Route path ="/blog" element = {<Blog/>}/>
            <Route path = "/updateblog/:id" element = {<UpdateBlog/>}/>
            <Route path = "/brands" element = {<Brand/>}/>
            <Route path = "/newBrand" element = {<NewBrand/>}/>
            <Route path = "/updatebrand/:id" element = {<UpdateBrand/>}/>
            <Route path = "/newpc" element = {<NewProductCategory/>}/>
            <Route path = "/newbc" element = {<NewBlogCategory/>}/>
            <Route path ="/categories-product" element = {<CategorieProduit/>}/>
            <Route path = "/categories-blog" element = {<CategorieBlog/>}/>
        </Routes>
      </div>
      </div> 
    </div>
  )
}
