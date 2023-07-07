import React,{useState,useEffect,useRef} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {v4 as uuidv4} from "uuid"
import {TbCameraPlus} from "react-icons/tb"
import {RiUploadCloudFill} from "react-icons/ri"
import Lottie from "react-lotties"
import  {useNavigate,useParams} from "react-router-dom"
import animationData from "../../assets/9582-liquid-4-dot-loader (1).json"
import {MdDelete} from "react-icons/md"
import MenuItem from '@mui/material/MenuItem';
import { SaveButton } from '../smallComponents/Buttons';
import {useAlert} from "react-alert"
import Select from 'react-select'
import { height } from '@mui/system';
import { useSelector,useDispatch } from "react-redux"
import { updateBrand } from '../../features/actions/brandAction';
import {UPDATE_BLOG_RESET} from "../../features/constants/BlogConstants"
import {clearErrors} from "../../features/actions/productAction"
export default function UpdateBrand() {
    const dispatch = useDispatch()
    const alert = useAlert()
    const [show,setShow] = useState(false)
    const [seeHover,setSeeHover] = useState(false)
    const [title,setTitle] = useState("")
    const [showModal,setShowModal] = useState(false)
    const history = useNavigate()
    const {error,isUpdated} = useSelector(state=>state.deleteBrand)
    const  {id} = useParams()
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
const updateBrandSubmit = (e) => {
  e.preventDefault();
  dispatch(updateBrand(id,{
    title:title,
  }));
};


const nameRef = useRef()
useEffect(() => {
  
  if (error) {
    alert.error(error);
    dispatch(clearErrors());
  }
  if(localStorage.getItem("UPDATE_BRAND_APACHER"))
  {
    let b = JSON.parse(localStorage.getItem("UPDATE_BRAND_APACHER"))
    setTitle(b?.title)  
  }

  if (isUpdated) {
    alert.success("Opération terminé");
    dispatch({ type: UPDATE_BLOG_RESET });
    history("/brands")
  }
}, [error,isUpdated])


    return (
<>
    <div className='px-7 py-5 h-full'>
        <form onSubmit = {updateBrandSubmit} className='h-full p-5 lg:p-10 rounded-md flex flex-row justify-start items-left' style = {{backgroundColor:"#f3f3f3"}}>
          <div className ="flex flex-col justify-start">  
            <h1 className ="font-bold mb-2">Modifier une marque</h1>
  
            <div className='mt-7 flex flex-col lg:flex-row items-center justify-start gap-5'>
                <TextField ref={nameRef} value = {title} onChange={(e)=>setTitle(e.target.value)} className='w-500' id="outlined-basic" label="Nom marque" variant="outlined" />
            </div>

         
           <div className='flex w-full items-center justify-end px-5 py-7'>
            <SaveButton type ="submit">Modifier</SaveButton>
         </div>
      </div>
   

      
        </form>
    </div>


</>
  )
}
