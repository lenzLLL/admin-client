import React from 'react'
import TextField from '@mui/material/TextField';
import { SaveButton } from '../smallComponents/Buttons';
import {Link} from "react-router-dom"

export default function ForgetPassword() {
  return (
    <div className ="flex flex-column justify-center items-center p-5 h-full" style = {{backgroundColor:"#f3f3f3"}}>
        <div className=' flex flex-col item-center bg-white p-5 rounded-md'>
            <h1 className ="font-bold text-3xl self-center mb-4">Rénitialisation</h1>
            <div className='flex flex-colmn mb-3'>
                <TextField id="outlined-basic" className='w-400' label="Adresse email" type ="email" variant="outlined" />
            </div> 
            
            <SaveButton>Envoyer</SaveButton> 
  
        </div>
    </div>
  )
}
