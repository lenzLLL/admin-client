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
import { NEW_PRODUCT_RESET } from '../../features/constants/ProductConstants';
import {clearErrors} from "../../features/actions/productAction"
import {createBlog} from "../../features/actions/blogAction"
export default function NewBlog() {

    const dispatch = useDispatch()
    const alert = useAlert()
    const [show,setShow] = useState(false)
    const [image,setImage] = useState(null)
    const {loading,error,success} = useSelector(state => state.newBlog)
    const {user} = useSelector(state => state.user)
    const [seeHover,setSeeHover] = useState(false)
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState(null)
    const [author,setAuthor] = useState(null)
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
    const Categories = [
    {
        nom:"Iphone"
    },
    {
        nom:"Pc"
    }
    ,
    {
        nom:"Chargeur"
    },
    {
        nom:"Itel"
    }
    ]
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

    if(!image||!title || !description ||!category)
    {
          return false
    }  
    return true
}
const createProductSubmitHandler = (e) => {
  e.preventDefault();
  dispatch(createBlog({
    title:title,
    description:description,
    category:category,
    image:image,
    author:user?.name
  }));
  alert.success("opération terminée")
  window.location.reload()
};

const uploadImages = (e) =>{

    const reader = new FileReader();
    reader.onload = ()=>{
        if(reader.readyState === 2)
        {
            setImage(reader.result)

        }
    }
    reader.readAsDataURL(e.target.files[0])
}


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

    dispatch({ type: NEW_PRODUCT_RESET });
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
            <h1 className ="font-bold mb-2">Ajouter un produit</h1>
            <p style = {{color:"#555"}} className ="text-md font-800">ajouter un produit afin de le rentre disponoble sur votre plateforme</p>
            <div className='mt-7 flex flex-col lg:flex-row items-center justify-start gap-5'>
                <TextField value = {title} onChange={(e)=>setTitle(e.target.value)} className='w-500' id="outlined-basic" label="Titre" variant="outlined" />

            </div>


           <div className='mt-4 flex flex-col lg:flex-row items-center justify-start gap-5'>     
             <TextField
          id="outlined-select-currency"
          select
          label="Choisir la catègorie"
          defaultValue="EUR"
          className = "w-500"
          value = {category} 
          onChange={(e)=>setCategory(e.target.value)}
        >
          {Categories.map((option) => (
            <MenuItem key={option.nom} value={option.nom}>
              {option.nom}
            </MenuItem>
          ))}
        </TextField>
           </div>


        

           <div className='mt-4'>
           <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          className='w-500'
          rows={4}
          value = {description} 
          onChange={(e)=>setDescription(e.target.value)}
        />
           </div>

                {
         validSave() && <div className='flex w-full items-center justify-end px-5 py-7'>
            <SaveButton type ="submit">Enregistrer</SaveButton>
         </div>
     }   
      </div>
      <div className='pl-5'>
          <p>Vous pouvez ajouter jusqu'à <span className ="font-bold">5 images</span> à votre produit</p>
          <div className='mt-10 flex flex-col items-center justify-center '>
             <label className ="cursor-pointer">
                 <TbCameraPlus style = {{fontSize:"200px",color:"#34495e"}}/>
                 <input multiple onChange = {uploadImages} type = "file" className='hidden' name = "products" accept = "image/*" />
                 <div className ="relative">
                     <div className='absolute p-3 font-bold -top-2 -right-2 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white'>
                     {image? 1:0}
                     </div>
                     <div className='bg-mainColor p-2 items-center text-white font-bold flex rounded-md'>
                        <RiUploadCloudFill/><div className ="w-2"></div> <p>Ajoutez une image</p>
                     </div>
                 </div> 
             </label> 
             {/* {msg && <p className={alertStatus === "danger"? isDanger:isSuccess}>{msg}</p>} */}
          </div>
      </div>   

        </form>
    </div>
  <div className='px-7 py-5 h-full'>
        <p className='font-bold  mb-5'>Image ({image? 1:0})</p>
        <div className ="p-5 lg:p-10 gap-3 flex justify-start items-center" style ={{backgroundColor:"#f3f3f3"}}>

                
                        <div >
                            <img className = "rounded-md" style = {{width:"205px",height:"310px"}} src = {image} />
                        </div>

         { isLoading && <div>
               <Lottie 
	           options={defaultOptions}
               height={"100px"}
               width={"150px"}
               />
           </div>}
        </div>
    </div>

</>
  )
}
