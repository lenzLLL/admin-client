import React,{useState} from 'react'
import {MdShoppingBasket} from "react-icons/md"
import {HiMenu} from "react-icons/hi"
import SidebarHome from './homeSidebar'
import { useSelector } from 'react-redux';
import store from "../../app/store"
import { loadUser } from '../../features/actions/userActions';
import Avatar from '@mui/material/Avatar';

export default function Header() {
      const [choose,setChoose] = useState(false)
      const {isAuthentificated,user} = useSelector(state =>state.user)
      let U = JSON.parse(localStorage.getItem("ADMIN_APACHER"))
      let us = {...user}
      const toggleChoose = () =>{
          setChoose(!choose)
          
      }
      React.useEffect(
          ()=>{
            store.dispatch(loadUser())
          },[choose]
      )
      if(!us.avatar)
      {
          return <h1>......</h1>
      }
    return (
        <>
        {
            choose && (
                <SidebarHome setChoose = {setChoose}/>
            )
        }
    <div className='w-full h-80 px-3 flex items-center shadow-sm justify-between'>
        
        <div className='flex gap-1 items-center font-bold'>
            <HiMenu className='cursor-pointer' onClick = {()=>toggleChoose()} style = {{fontSize:"30px"}}/>
         <h2 className='text-lg font-bold '>{"Administration"}</h2>   
        </div>
        <div className='flex gap-3 items-center h-full '>
             
          <div className='relative h-60   flex items-center'>
              <div className='absolute rounded-full w-5 h-5 text-white flex items-center justify-center  bg-red-500  top-2 -right-1 text-sm font-bold shadow-md '>{2}</div>
              <MdShoppingBasket className='text-3xl z-100' style = {{color:"#666"}}/>
          </div>
{ isAuthentificated &&           <Avatar alt="Remy Sharp" src={us.avatar? us.avatar.url:""} />}
        </div>

    
    </div>
    </>
  )
}


