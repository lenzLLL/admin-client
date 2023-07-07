import React,{useEffect,useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Modal } from '@mui/material';
import TransitionsModal from '../smallComponents/Modal';
import {Link,useNavigate} from "react-router-dom"
import {useAlert} from "react-alert"
import {useDispatch,useSelector} from "react-redux"
import { getAdminProduct,deleteProduct } from '../../features/actions/productAction';

import { title } from 'process';

export default function DataTable({onSet}) {
  const dispatch = useDispatch()
  const history = useNavigate()
  const {isDeleted} = useSelector(state => state.deleteProduct)
  const [showModal,setShowModal] = useState(false)
  const {error,products} = useSelector((state)=>state.products)
  const P = [...products]
  const alert = useAlert()

const URL = "http://clipart-library.com/image_gallery2/Watch-Free-Download-PNG.png"
const deleteProductHandle = (id) => {
    dispatch(deleteProduct(id))
} 
const updateProductEvent = (id) => {
      for(let i = 0;i<products.length;i++)
      {
        if(products[i]._id == id)
        {
          localStorage.setItem("UPDATE_PRODUCT_APACHER",JSON.stringify(products[i]))
        }
        history("/updateproduct/"+id)
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
        <img src= {params.row.images[0].url} alt = {params.row.name} className =" rounded-full"/>
         
      
        </div>
      )
    }
  },
  { field: 'title', headerName: 'Nom', width: 120 ,align:"center"},
  {
    field: 'price',
    headerName: 'Prix de vente',
    sortable:false,
    type:"number",
    width: 130,
    align:"center"
  },
  {
    field: 'benefice',
    headerName: 'Bénéfice',
    sortable: false,
    width: 100,
    type:"number",
    align:"center"
  
  },
  { field: 'provider', headerName: 'Fournisseur', width: 120 ,align:"center"},
  { field: 'category', headerName: 'Categorie', width: 100 ,align:"center"},
  { field: 'rating', headerName: 'Note', width: 50 ,align:"center"},

  {
    field: 'action',
    headerName: 'Actions',
    // type: 'number',
    width: 200,
    align :"center",
    renderCell:(params)=>{
      return(
        <div style = {{width:200}} className ="flex justify-left gap-3 items-center" >
            <div onClick = {()=>updateProductEvent(params.row._id)} className='py-2 px-3 bg-blue-100 rounded-md text-blue-600 font-bold cursor-pointer'>Modifier</div>
           <div onClick = {()=>deleteProductHandle(params.row._id)}  className='py-2 px-3 bg-red-100 rounded-md text-red-600 font-bold cursor-pointer'>Supprimer</div>
         
      
        </div>
      )
    }
  },

];
  

  useEffect(
    ()=>{
        dispatch(getAdminProduct())   
        if(isDeleted)
        {
            alert.success("Produit supprimé")
            setTimeout(()=>{
              window.location.reload()    
            },1000)
                   
        }  
        onSet(products?.length)
    },[isDeleted]
  )
  return (
    <>
        <div style={{ height: 600, width: '100%',marginBottom:"5px",fontFamily:"Poppins",fontWeight:"800" }} className ="mt-2">
      <DataGrid
        getRowId={(row) => row._id}
        rows={P}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
 
    </>
  );
}