import React,{useState} from 'react'
import BrandTable from "./TableBrand"
import {Routes,Route,Link} from "react-router-dom"
import Lottie from "react-lotties"
import animationData from "../../assets/9582-liquid-4-dot-loader (1).json"
export default function Brand() {
  const [lp,setLp] = useState(null)
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
            <p className='font-bold'>Marques ({lp})</p>
            <Link to ="/newbrand"><button className ="font-bold px-3 py-1 bg-green-500 text-white rounded-md">Ajouter +</button></Link>  
        </div>
        <BrandTable onSet = {setLp}/>       
    </div>
  )
}
