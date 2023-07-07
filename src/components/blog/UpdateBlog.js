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
import {detailsBlogAction,updateBlog} from "../../features/actions/blogAction"
import {UPDATE_BLOG_RESET} from "../../features/constants/BlogConstants"
import {clearErrors} from "../../features/actions/productAction"
export default function UpdateBlog() {
    const [productId,setProductId] = useState(null)
    const dispatch = useDispatch()
    const alert = useAlert()
    const [runLoadind,setRunLoading] = useState(false)
    const [show,setShow] = useState(false)
    const [image,setImage] = useState({})
    const {error,isUpdated} = useSelector(state => state.deleteBlog)
    const {loading,detailsBlog} = useSelector(state=>state.detailsBlog)
    const [seeHover,setSeeHover] = useState(false)
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState(null)
    const [newImage,setNewImage] = useState(null)
    const [showModal,setShowModal] = useState(false)
    const history = useNavigate()
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

    if( !title || !description ||!category)
    {
          return false
    }  
    return true
}
const updateBlogSubmit = (e) => {
  e.preventDefault();
  dispatch(updateBlog(id,{
    title:title,
    description:description,
    category:category,
    image:image,
    newImage:newImage
  }));
  
};
const uploadImages = (e) =>{

  const reader = new FileReader();
  reader.onload = ()=>{
      if(reader.readyState === 2)
      {
          setNewImage(reader.result)

      }
  }
  reader.readAsDataURL(e.target.files[0])
}
const fetchBlog = () => {
  dispatch(detailsBlogAction(id))
}

useEffect(() => {
  fetchBlog()
  if (error) {
    alert.error(error);
    dispatch(clearErrors());
  }
  if(localStorage.getItem("UPDATE_BLOG_APACHER"))
  {
    let detailsB = JSON.parse(localStorage.getItem("UPDATE_BLOG_APACHER")) 
    setImage(detailsB?.image)
    setTitle(detailsB?.title)
    setDescription(detailsB?.description)
    setCategory(detailsB?.category)
  }
  if (isUpdated) {
    alert.success("Opération terminé");
    dispatch({ type: UPDATE_BLOG_RESET });
    history("/blog")
  }
}, [error,isUpdated])

if(loading && image)
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
        <form onSubmit = {updateBlogSubmit} className='h-full p-5 lg:p-10 rounded-md flex flex-row justify-start items-left' style = {{backgroundColor:"#f3f3f3"}}>
          <div className ="flex flex-col justify-start">  
            <h1 className ="font-bold mb-2">Modifier un article</h1>
  
            <div className='mt-7 flex flex-col lg:flex-row items-center justify-start gap-5'>
                <TextField  value = {title} onChange={(e)=>setTitle(e.target.value)} className='w-500' id="outlined-basic" label="Nom produit" variant="outlined" />
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
         
           <div className='flex w-full items-center justify-end px-5 py-7'>
            <SaveButton type ="submit">Modifier</SaveButton>
         </div>
      </div>
      <div className='pl-5'>
          <p>Vous pouvez importer <span className ="font-bold">1 image</span> à votre produit</p>
          <div className='mt-10 flex flex-col items-center justify-center '>
             <label className ="cursor-pointer">
                 <TbCameraPlus style = {{fontSize:"200px",color:"#34495e"}}/>
                 <input multiple onChange = {uploadImages} type = "file" className='hidden' name = "products" accept = "image/*" />
                 <div className ="relative">
                     <div className='absolute p-3 font-bold -top-2 -right-2 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white'>
                     {newImage? 1:1}
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
        <p className='font-bold  mb-5'>Images (1)</p>
        <div className ="p-5 lg:p-10 gap-3 flex justify-start items-center" style ={{backgroundColor:"#f3f3f3"}}>
          {
               newImage?
                        (<div >
                            <img className = "rounded-md" style = {{width:"205px",height:"310px"}} src = {newImage} />
                        </div>)
                             :
                     ( <div >
{                    image.url &&      <img className = "rounded-md" style = {{width:"205px",height:"310px"}} src = {image.url} />}
                      </div>)
   

          }  
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
