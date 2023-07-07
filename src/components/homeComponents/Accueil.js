import React,{useState} from 'react'
import {FaStoreAlt} from "react-icons/fa"
import {FaUserShield} from "react-icons/fa"
import {MdLocalShipping} from "react-icons/md"
import {GiTakeMyMoney} from "react-icons/gi"
import {BsFilter} from "react-icons/bs"
import CustomizedTables from './Table'

import { useEffect } from 'react'
import { Column } from '@ant-design/plots';

export default function Accueil({lp}) {
    const isNotSelected  ="flex items-center justify-center py-2 px-2 bg-white font-bold"
    const isSelected ="flex items-center justify-center py-2 px-2 bg-gray font-bold"
    const [isActiveAll,setActiveAll] = useState(true)
    const [isActiveDelivered,setActiveAllDelivered] = useState(false)
    const [isActivePending,setActivePending] = useState(false)
   
    const data = [
        {
          type: 'Jan',
          sales: 38,
        },
        {
          type: 'Fev',
          sales: 52,
        },
        {
          type: 'Mar',
          sales: 61,
        },
        {
          type: 'Avr',
          sales: 145,
        },
        {
          type: 'Mai',
          sales: 48,
        },
        {
          type: 'Juin',
          sales: 18,
        },
        {
          type: 'Juiel',
          sales: 58,
        },
        {
          type: 'Aout',
          sales: 40,
        },
        
        {
          type: 'Sep',
          sales: 56,
        },
        {
          type: 'Oct',
          sales: 70,
        },
        {
          type: 'Nov',
          sales: 60,
        },
        {
          type: 'Dec',
          sales: 32,
        }
      ];
      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle',
          // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: 'Mois',
          },
          sales: {
            alias: 'Révénu',
          },
        },
      };
    const AllProducts = () =>{
        return             <div className='w-60 h-50 flex items-center justify-between bg-white p-4 rounded-md' style = {{boxShadow:"0 0 5px rgba(0,0,0,0.25)"}}>
        <div className='flex flex-col items-start font-bold text-lg'>
           <p className='font-bold'>{lp}</p>
           <p className='font-bold'>Produits</p>
        </div>
        <div className='bg-red-600 rounded-md  text-white px-6 py-3'>
         <FaStoreAlt style = {{fontSize:"22px"}}/>
        </div>
    </div>
    }
    
    const toggleOrder = (type) =>{
                   if(type === "all")
                   {
                       setActiveAll(true)
                       setActiveAllDelivered(false)
                       setActivePending(false)
                   }
                   else if(type === "pending")
                   {
                       setActiveAll(false)
                       setActiveAllDelivered(false)
                       setActivePending(true)
                   }
                   else      if(type === "delivered")
                   {
                       setActiveAll(false)
                       setActiveAllDelivered(true)
                       setActivePending(false)
                   }
    }

 
    return (
    <div  style = {{height:"calc(100vh-80px)"}} className=' py-5  h-full  px-7 flex flex-col justify-start'>
        <h2 className='font-semibold text-lg '>Détails Du marché</h2>
        <div className='mx-auto flex flex-wrap w-full gap-3 justify-center lg:justify-between mt-5 '>
             <AllProducts />
             <AllOrders indice = {1}/>
             <AllCustomers indice = {3}/>
             <AllMoney indice = {200}/>
        </div>
        <div className='m-5'>
            <h2 className='font-semibold text-lg my-4'>Statistiques</h2>
            <Column {...config} />
        </div>

        <div className='flex items-center justify-between my-9'>
            <h2 className='font-bold text-lg'>Commandes ({2})</h2>
            <div className='flex ites-center'>
                <div className='flex items-center cursor-pointer self-end mb-1'>
                   <BsFilter/>
                   <span className='font-semibold'>Filtre</span>
                </div>
                <div className='flex mx-2 cursor-pointer'>
                <div onClick = {()=>toggleOrder("all")} style = {{border:"1px solid #999"}} className= {`${isActiveAll? isSelected:isNotSelected}`}>
                        Tous
                    </div>
                    <div onClick = {()=>toggleOrder("delivered")} style = {{border:"1px solid #999"}} className= {`${isActiveDelivered? isSelected:isNotSelected}`}>
                        Livrés
                    </div>
                    <div onClick = {()=>toggleOrder("pending")} style = {{border:"1px solid #999"}} className= {`${isActivePending? isSelected:isNotSelected}`}>
                        En Cours
                    </div>
                </div>
            </div> 
        </div>
        <CustomizedTables/>
    </div>
  )
}



































const AllCustomers = ({indice}) =>{
    return             <div className='w-60 h-50 flex items-center justify-between bg-white p-4 rounded-md' style = {{boxShadow:"0 0 5px rgba(0,0,0,0.25)"}}>
    <div className='flex flex-col items-start font-bold text-lg'>
       <p className='font-bold'>{indice}</p>
       <p className='font-bold'>Utilisateurs</p>
    </div>
    <div className='bg-blue-600 rounded-md  text-white px-6 py-3'>
     <FaUserShield style = {{fontSize:"22px"}}/>
    </div>
</div>
}
const AllOrders = ({indice}) =>{
    return             <div className='w-60 h-50 flex items-center justify-between bg-white p-4 rounded-md' style = {{boxShadow:"0 0 5px rgba(0,0,0,0.25)"}}>
    <div className='flex flex-col items-start font-bold text-lg'>
       <p className='font-bold'>{indice}</p>
       <p className='font-bold'>Commandes</p>
    </div>
    <div className='bg-blue-600 rounded-md bg-orange-600  text-white px-6 py-3'>
     <MdLocalShipping style = {{fontSize:"22px"}}/>
    </div>
</div>
}

const AllMoney = ({indice}) =>{
    return             <div className='w-60 h-50 flex items-center justify-between bg-white p-4 rounded-md' style = {{boxShadow:"0 0 5px rgba(0,0,0,0.25)"}}>
    <div className='flex flex-col items-start font-bold text-lg'>
       <p className='font-bold'>{indice} $</p>
       <p className='font-bold'>Caisse</p>
    </div>
    <div className='bg-green-600 rounded-md bg-orange-600  text-white px-6 py-3'>
     <GiTakeMyMoney style = {{fontSize:"22px"}}/>
    </div>
</div>
}

