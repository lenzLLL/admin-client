import React,{useEffect,useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Modal } from '@mui/material';
import TransitionsModal from '../smallComponents/Modal';
import {Link,useNavigate} from "react-router-dom"
import {useAlert} from "react-alert"
import {useDispatch,useSelector} from "react-redux"
import {deleteBlog} from "../../features/actions/blogAction"
import { getAllPc } from '../../features/actions/producCategoryAction';
import { getAllBc } from '../../features/actions/blogCategoryAction';

export default function DataTableBlog({onSet,type}) {
  const dispatch = useDispatch()
  const history = useNavigate()
  const {isDeleted} = useSelector(state => state.deleteBlog)
  const [showModal,setShowModal] = useState(false)
  const {error,pcs} = useSelector((state)=>state.pcs)
  const {bcs} = useSelector((state)=>state.bcs)
  let data = [...bcs]
  const alert = useAlert()

 const URL = "http://clipart-library.com/image_gallery2/Watch-Free-Download-PNG.png"
 const deleteBlogHandle = (id) => {
    dispatch(deleteBlog(id))
 } 
 const updateBlogEvent = (id) =>{
  // for(let i = 0;i<blogs.length;i++)
  // {
  //   if(blogs[i]._id == id)
  //   {
  //       localStorage.setItem("UPDATE_BLOG_APACHER",JSON.stringify(blogs[i]))
  //       history("/updateblog/"+id)
  //   }
  // }
}
const changeData = () => {
  if(type === "Produits")
  {
    history("/categories-product")
  }

}
const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 70 ,align:"left"},
   ,
  { field: 'title', headerName: 'Nom', width: 120 ,align:"center"},
  ,
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
        dispatch(getAllPc())
        dispatch(getAllBc())
        changeData()   
        if(isDeleted)
        {
            alert.success("Catégorie supprimé")
            setTimeout(()=>{
              window.location.reload()    
            },1000)
                   
        }  
        onSet(pcs?.length)
    },[isDeleted,type]
  )
  return (
    <>
        <div style={{ height: 600, width: '100%',marginBottom:"5px",fontFamily:"Poppins",fontWeight:"800" }} className ="mt-2">
      <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
 
    </>
  );
}