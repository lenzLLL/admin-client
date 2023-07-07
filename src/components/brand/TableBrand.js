import React,{useEffect,useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Modal } from '@mui/material';
import TransitionsModal from '../smallComponents/Modal';
import {Link,useNavigate} from "react-router-dom"
import {useAlert} from "react-alert"
import {getBrand,deleteBrand} from "../../features/actions/brandAction"
import {useDispatch,useSelector} from "react-redux"
import { title } from 'process';

export default function DataTable({onSet}) {
  const dispatch = useDispatch()
  const history = useNavigate()
  const {isDeleted} = useSelector(state => state.deleteBrand)
  const [showModal,setShowModal] = useState(false)
  const {error,brands} = useSelector((state)=>state.brands)
  const b = [...brands]
  const alert = useAlert()
  const updateBrandEvent = (id) => {
    for(let i = 0;i<brands.length;i++)
    {
      if(brands[i]._id == id)
      {
        localStorage.setItem("UPDATE_BRAND_APACHER",JSON.stringify(brands[i]))
        history("/updatebrand/"+id)
      }
    }
  }
const URL = "http://clipart-library.com/image_gallery2/Watch-Free-Download-PNG.png"
const deleteBrandHandle = (id) => {
    dispatch(deleteBrand(id))
} 
const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 70 ,align:"left"},

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
           <div onClick = {()=>updateBrandEvent(params.row._id)} className='py-2 px-3 bg-blue-100 rounded-md text-blue-600 font-bold cursor-pointer'>Modifier</div>
           <div onClick = {()=>deleteBrandHandle(params.row._id)}  className='py-2 px-3 bg-red-100 rounded-md text-red-600 font-bold cursor-pointer'>Supprimer</div>
         
      
        </div>
      )
    }
  },

];
  

useEffect(
    ()=>{
        dispatch(getBrand())   
        if(isDeleted)
        {
            alert.success("suppression terminée")
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
 
    </>
  );
}