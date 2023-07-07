import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {v4 as uuidv4} from "uuid"
import {TbCameraPlus} from "react-icons/tb"
import {RiUploadCloudFill} from "react-icons/ri"
import Lottie from "react-lotties"
import  {useNavigate} from "react-router-dom"
import animationData from "../../assets/9582-liquid-4-dot-loader (1).json"
import {MdDelete} from "react-icons/md"
import MenuItem from '@mui/material/MenuItem';
import { SaveButton } from '../smallComponents/Buttons';
import {useAlert} from "react-alert"
import Select from 'react-select'
import { height } from '@mui/system';
import { useSelector,useDispatch } from "react-redux"
import {createProduct} from "../../features/actions/productAction"
import { NEW_BRAND_RESET } from '../../features/constants/BrandConstant';
import {clearErrors} from "../../features/actions/productAction"
import {createBrand} from "../../features/actions/brandAction"
export default function NewBrand() {

    const dispatch = useDispatch()
    const alert = useAlert()
    const [show,setShow] = useState(false)
    const {loading,error,success} = useSelector(state => state.newBrand)
    const [title,setTitle] = useState("")
    const [showModal,setShowModal] = useState(false)
    const history = useNavigate()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const [isLoading,setIsLoading] = useState(false)
    const [alertStatus,setAlertStatus] = useState("success")
    const isSuccess = "text-center font-bold mt-1 text-green-500"
    const isDanger = "text-center font-bold mt-1 text-red-500"

     const customStyles = {
      option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: state.isSelected ? "black" : "blue",
        backgroundColor: state.isSelected ? "green" : "white",
      }),
  
      control: (defaultStyles) => ({
        ...defaultStyles,
        backgroundColor: "#f3f3f3",
        padding: "8px",
        border: "1px solid rgba(0,0,0,0.222)",
        boxShadow: "none",
      }),
      singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
    };


const validSave =()=>{

    if(title?.length <3)
    {
          return false
    }  
    return true
}
const createProductSubmitHandler = (e) => {
  e.preventDefault();
  dispatch(createBrand({
    title:title,
  }));

};




useEffect(() => {
  if (error) {
    alert.error(error);
    dispatch(clearErrors());
  }

  if (success) {
    setTimeout(
      ()=>{
        setShow(true)
      },2000
    )
    setTimeout(
      ()=>{
        setShow(false)
        alert.success("Opération terminé");
        window.location.reload()
      },3000
    )

    dispatch({ type: NEW_BRAND_RESET });
  }
}, [error,success,loading])

if(show)
{
  return <div>
  <Lottie 
options={defaultOptions}
  height={"500px"}
  width={"350px"}
  />
</div>}
    return (
<>
    <div className='px-7 py-5 h-full'>
        <form onSubmit = {createProductSubmitHandler} className='h-full p-5 lg:p-10 rounded-md flex flex-row justify-start items-left' style = {{backgroundColor:"#f3f3f3"}}>
          <div className ="flex flex-col justify-start">  
            <h1 className ="font-bold mb-2">Ajouter une marque</h1>
            <p style = {{color:"#555"}} className ="text-md font-800">Chaque produit doit etre référencé par une marque de fabrication</p>
            <div className='mt-7 flex flex-col lg:flex-row items-center justify-start gap-5'>
                <TextField value = {title} onChange={(e)=>setTitle(e.target.value)} className='w-500' id="outlined-basic" label="Titre" variant="outlined" />

            </div>





        



                {
         validSave() && <div className='flex w-full items-center justify-end px-5 py-7'>
            <SaveButton type ="submit">Enregistrer</SaveButton>
         </div>
     }   
      </div>
 

        </form>
    </div>


</>
  )
}
