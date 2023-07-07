import React from 'react'
import {MdShoppingBasket} from "react-icons/md"
import { sideBarLinks } from '../../utils/data'
import {NavLink} from "react-router-dom"



export default function SidebarHome
({setChoose}) {

    const isActiveStyle =  ' flex gap-3 bg-linkColor font-800 w-full rounded-sm my-1 text-white items-center justify-start px-3 py-2'
    const isNotActive = 'flex gap-3 bg-transparent font-800 w-full rounded-sm my-1 text-white items-center justify-start px-3 py-2'
  return (
    <div style = {{minWidth:"80%"}} className='fixed top-0 bottom-0 flex lg:hidden h-screen bg-mainColor p-5 pt-7 flex-col bg-black w-1/5 items-center justify-start'>
        <span onClick = {()=>setChoose(false)} className='self-start font-semibold text-3xl text-white mb-2 cursor-pointer'>X</span>
        <div className='w-full flex py-3 bg-white rounded-md items-center justify-start p-5 gap-2'>
            <div className='  w-7 h-7 rounded-full flex items-center justify-center bg-mainColor text-white'>
               <MdShoppingBasket />
            </div>
            <p className='font-semibold text-md'>NetSell</p>
        </div>
        <ul className='mt-6 flex flex-col items-start justify-start w-full'>
            {
                sideBarLinks.map(
                    (item)=>{
                        return <NavLink to = {item.link} className = {item.link === "/"? isActiveStyle:isNotActive}  >
                             {item.icon}{item.name}
                            </NavLink>
                    }
                )           }
        </ul>
    </div>
  )
}  
