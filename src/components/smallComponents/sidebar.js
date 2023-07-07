import React from 'react'
import {MdShoppingBasket} from "react-icons/md"
import { sideBarLinks } from '../../utils/data'
import {NavLink} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {useAlert} from "react-alert"
import { changeLink } from '../../features/actions/linksAction'

export default function Sidebar
() {
    const dispatch = useDispatch()
    const {navlink} = useSelector((state)=>state.link)
    const isActiveStyle =  'flex gap-3 bg-linkColor font-800 w-full rounded-sm my-1 text-white items-center justify-start px-3 py-2'
    const isNotActive = 'flex gap-3 bg-transparent font-800 w-full rounded-sm my-1 text-white items-center justify-start px-3 py-2'
    const change = (link) =>  {
        dispatch(changeLink(link))
    } 
    return (
    <div className='fixed top-0 bottom-0 hidden lg:flex h-screen bg-black p-5 pt-7 flex-col  w-1/5 items-center justify-start'>
        <div className='w-full flex py-3 bg-white rounded-md items-center justify-start p-5 gap-2'>
            <div className='w-7 h-7 rounded-full flex items-center justify-center bg-mainColor text-white'>
               <MdShoppingBasket/>
            </div>
            <p className='font-semibold text-md'>Apacher</p>
        </div>
        <ul className='mt-6 flex flex-col items-start justify-start w-full'>
            {
                sideBarLinks.map(
                    (item)=>{
                        return <NavLink onClick = {()=>change(item.link)} to = {item.link} className = {navlink === item.link? isActiveStyle:isNotActive}  >
                             {item.icon}{item.name}
                            </NavLink>
                    }
                )           }
        </ul>
    </div>
  )
}  
