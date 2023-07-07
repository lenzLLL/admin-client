import React,{useState} from 'react'
import Categories from "./TableCategoriesProduct"
import {Routes,Route,Link} from "react-router-dom"
import Lottie from "react-lotties"
import { MenuItem } from '@mui/material'
import { TextField } from '@mui/material'
import animationData from "../../assets/9582-liquid-4-dot-loader (1).json"
export default function CategorieProduit() {
  const [lp,setLp] = useState(null)
  const [type,setType] = useState("Produits")
  const [show,setShow] = useState(false)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  React.useEffect(
    ()=>{
         setTimeout(
           ()=>{
               setShow(true)
           },[3000]
         )
    },[]
  )
  if(!show)
  {
    return <div>
    <Lottie 
  options={defaultOptions}
    height={"500px"}
    width={"350px"}
    />
</div>}
  
  return (
    <div className='h-full px-7 py-5'>
        <div className='flex items-center justify-between'>
            <p className='font-bold'>Catégories Produits ({lp})</p>
            <div className='flex flex-col lg:flex-row items-center justify-start'>     
             <TextField
          id="outlined-select-currency"
          select
          label="type"
          defaultValue="EUR"
          className = "w-500"
          value = {type} 
          onChange={(e)=>setType(e.target.value)}
     
        >
          {["Produits","Blogs"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
           </div>
            <Link to ="/newpc"><button className ="font-bold px-3 py-1 bg-green-500 text-white rounded-md">Ajouter +</button></Link>  
        </div>
        <Categories type = {type} onSet = {setLp}/>       
    </div>
  )
}
