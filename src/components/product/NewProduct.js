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
export default function NewProduct() {
    const [productId,setProductId] = useState(null)
    const dispatch = useDispatch()
    const alert = useAlert()
    const [show,setShow] = useState(false)
    const [images,setImages] = useState([])
    const {loading,error,success} = useSelector(state => state.newProduct)
    const [seeHover,setSeeHover] = useState(false)
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [providerPrice,setProviderPrice] = useState(null)
    const [price,setPrice] = useState(null)
    const [category,setCategory] = useState(null)
    const [provider,setProvider] = useState(null)
    let colors = ["black","red"]
    const [brand,setBrand] = useState(null)
    const [benefice,setBenenfice] = useState(10)
    const [genre,setGenre] = useState(null)
    const [showModal,setShowModal] = useState(false)
    let height = ["black","red"]
    const history = useNavigate()
    const color = [
      { value: 'Bleu', label: 'Bleu' },
      { value: 'Jaune', label: 'Jaune' },
      { value: 'Orange', label: 'Orange' }
    ]
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
    const GENRE = ["Mixte","Hommes","Femmes","Enfants"]
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
    const handleColor = (selectedOption) => {
        localStorage.setItem("COLORS_APACHER",JSON.stringify(selectedOption))
    };
    const handleSize = (selectedOption) => {
        localStorage.setItem("HEIGHT_APACHER",JSON.stringify(selectedOption))
    };

const validSave =()=>{
    if(images?.length === 0  )
    {
        return false
    }
    if(!localStorage.getItem("COLORS_APACHER")||!localStorage.getItem("HEIGHT_APACHER")|| !title || !description || !price || !providerPrice || !description||!brand||!category||!genre)
    {
          return false
    }  
    return true
}
const createProductSubmitHandler = (e) => {
  e.preventDefault();
  const myForm = new FormData();
  myForm.set("tile",title)
  myForm.set("description",description)
  myForm.set("providerPrice",providerPrice)
  myForm.set("price",price)
  myForm.set("category",category)
  myForm.set("provider",provider)
  myForm.set("brand",brand)
  myForm.set("benefice",benefice)
  myForm.set("genre",genre)
  images.forEach((image) => {
    myForm.append("images", image);
  });
  dispatch(createProduct({
    title:title,
    description:description,
    brand:brand,
    benefice:price-providerPrice,
    provider:provider,
    providerPrice:providerPrice,
    category:category,
    price:price,
    images:images,
    genre:genre,
    height:JSON.parse(localStorage.getItem("HEIGHT_APACHER")),
    colors:JSON.parse(localStorage.getItem("COLORS_APACHER")),
  }));
  alert.success("opération terminée")
  window.location.reload()
};

const uploadImages = (e) =>{
    const files = Array.from(e.target.files)
    if(files.length > 5)
    {
      alert.error("vous pouvez poster au maximum 5 produits par images")
      return
    }
    setImages([])
    files.forEach(
      (file) => {
        const reader = new FileReader()
        reader.onload = () => {
          if(reader.readyState === 2)
          {
              setImages((old)=>[...old,reader.result])  
          }
        }
        reader.readAsDataURL(file)
      }
    ) 
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
                <TextField value = {title} onChange={(e)=>setTitle(e.target.value)} className='w-500' id="outlined-basic" label="Nom produit" variant="outlined" />

            </div>
            <div className='mt-4 flex flex-col lg:flex-row items-center justify-start gap-5'>     
               <TextField value = {providerPrice}  onChange={(e)=>setProviderPrice(e.target.value)} id="outlined-basic" className='w-250' label="Prix Fournisseur ($)" type ="number" variant="outlined" />
               <TextField value = {price}  onChange={(e)=>setPrice(e.target.value)} id="outlined-basic" className='w-250' label="Prix Vente" type ="number" variant="outlined" />
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
           <div className='mt-4 flex flex-col lg:flex-row items-center justify-start gap-5'>     
             <TextField
          id="outlined-select-currency"
          select
          label="Fournisseur"
          defaultValue="EUR"
          className = "w-500"
          value = {provider} 
          onChange={(e)=>setProvider(e.target.value)}
     
        >
          {Categories.map((option) => (
            <MenuItem key={option.nom} value={option.nom}>
              {option.nom}
            </MenuItem>
          ))}
        </TextField>
           </div>
           <div className='mt-4 flex flex-col lg:flex-row items-center justify-start gap-5'>     
             <TextField
          id="outlined-select-currency"
          select
          label="Marque"
          defaultValue="EUR"
          className = "w-500"
          value = {brand} 
          onChange={(e)=>setBrand(e.target.value)}
     
        >
          {Categories.map((option) => (
            <MenuItem key={option.nom} value={option.nom}>
              {option.nom}
            </MenuItem>
          ))}
        </TextField>
           </div>
           <div className='mt-4 flex flex-col lg:flex-row items-center justify-start gap-5'>     
             <TextField
          id="outlined-select-currency"
          select
          label="Genre"
          defaultValue="EUR"
          className = "w-500"
          value = {genre} 
          onChange={(e)=>setGenre(e.target.value)}
     
        >
          {GENRE.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
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
           <Select
              isMulti
              name="colors"
              options={color}
              className="basic-multi-select mt-4"
              classNamePrefix="select"
              styles={customStyles}
              placeholder={'Choisir les couleurs du produit'}
              onChange={handleColor}
            />           <Select
            isMulti
            styles={customStyles}
            name="size"
            options={color}
            className="basic-multi-select mt-4"
            classNamePrefix="select"
            placeholder={'Choisir les tailles du produit'}
            onChange={handleSize}
          />
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
                     {images.length}
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
        <p className='font-bold  mb-5'>Images ({images.length})</p>
        <div className ="p-5 lg:p-10 gap-3 flex justify-start items-center" style ={{backgroundColor:"#f3f3f3"}}>
          {
                  images?.map(
                  (item)=>{
                      return (
                        <div >
                            <img className = "rounded-md" style = {{width:"205px",height:"310px"}} src = {item} />
                        </div>
                      )
                  }
              )
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
