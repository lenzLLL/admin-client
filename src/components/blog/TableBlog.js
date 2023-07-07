import React,{useEffect,useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Modal } from '@mui/material';
import TransitionsModal from '../smallComponents/Modal';
import {Link,useNavigate} from "react-router-dom"
import {useAlert} from "react-alert"
import {useDispatch,useSelector} from "react-redux"
import {getAdminBlog,deleteBlog} from "../../features/actions/blogAction"
import { title } from 'process';

export default function DataTable({onSet}) {
  const dispatch = useDispatch()
  const history = useNavigate()
  const {isDeleted} = useSelector(state => state.deleteBlog)
  const [showModal,setShowModal] = useState(false)
  const {error,blogs} = useSelector((state)=>state.blogs)
  const b = [...blogs]
  const alert = useAlert()

const URL = "http://clipart-library.com/image_gallery2/Watch-Free-Download-PNG.png"
const deleteBlogHandle = (id) => {
    dispatch(deleteBlog(id))
} 
const updateBlogEvent = (id) =>{
  for(let i = 0;i<blogs.length;i++)
  {
    if(blogs[i]._id == id)
    {
        localStorage.setItem("UPDATE_BLOG_APACHER",JSON.stringify(blogs[i]))
        history("/updateblog/"+id)
    }
  }
}
const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 70 ,align:"left"},
  {
    field: 'image',
    headerName: 'Image',
    // type: 'number',
    width: 120,
    align :"center",
    renderCell:(params)=>{
      return(
        <div style ={{width:120}}  className ="rounded-md flex items-center justify-center p-2 fit-cover" >
        <img src= {params.row.image.url} alt = {params.row.name} className =" rounded-full"/>
        </div>
      )
    }
  },
  { field: 'title', headerName: 'Nom', width: 120 ,align:"center"},
  ,
  { field: 'category', headerName: 'Categorie', width: 100 ,align:"center"},
  { field: 'author', headerName: 'Auteur', width: 120 ,align:"center"},

  {
    field: 'action',
    headerName: 'Actions',
    // type: 'number',
    width: 200,
    align :"center",
    renderCell:(params)=>{
      return(
        <div style = {{width:200}} className ="flex justify-left gap-3 items-center" >
           <div onClick = {()=>updateBlogEvent(params.row._id)} className='py-2 px-3 bg-blue-100 rounded-md text-blue-600 font-bold cursor-pointer'>Modifier</div>
           <div onClick = {()=>deleteBlogHandle(params.row._id)}  className='py-2 px-3 bg-red-100 rounded-md text-red-600 font-bold cursor-pointer'>Supprimer</div>
         
      
        </div>
      )
    }
  },

];
  

useEffect(
    ()=>{
        dispatch(getAdminBlog())   
        if(isDeleted)
        {
            alert.success("ARticle supprimé")
            setTimeout(()=>{
              window.location.reload()    
            },1000)
                   
        }  
        onSet(b?.length)
    },[isDeleted]
  )
  return (
    <>
        <div style={{ height: 600, width: '100%',marginBottom:"5px",fontFamily:"Poppins",fontWeight:"800" }} className ="mt-2">
      <DataGrid
        getRowId={(row) => row._id}
        rows={b}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
 7
    </>
  );
}