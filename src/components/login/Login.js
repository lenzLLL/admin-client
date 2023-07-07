import React,{useEffect,useState,useRef} from 'react'
import TextField from '@mui/material/TextField';
import { SaveButton } from '../smallComponents/Buttons';
import {Link} from "react-router-dom"
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import {useNavigate} from "react-router-dom"
import {login,clearError} from "../../features/actions/userActions"
import {useDispatch,useSelector} from "react-redux"
import {useAlert} from "react-alert"


export default function Login() {
const {error,isLoading,isAuthentificated,user} = useSelector((state)=>state.user)
const alert = useAlert();
const dispatch = useDispatch();
const history = useNavigate()
const loginTab = useRef(null)
const [loginEmail,setLoginEmail] = useState("")
const [loginPassword,setLoginPassword] = useState("")

const loginSubmit = (e)=>{
  e.preventDefault();
  if(!loginEmail || !loginPassword)
  {
      alert.error("veillez remplir les champs") 
      return; 
  }
  dispatch(login(loginEmail,loginPassword))
  console.log("run")
}
  
  useEffect(()=>{
    if(error)
    {
        alert.error(error)
        dispatch(clearError())

    }
     if(isAuthentificated)
     {
        history("/")
        localStorage.setItem("ADMIN_APCHER",JSON.stringify(user))
                     
     }
  },[dispatch,error,alert,history,isAuthentificated])
  return (
    <div  className ="flex flex-column justify-center items-center p-5 h-full" style = {{backgroundColor:"#f3f3f3"}}>
        <form  ref = {loginTab} onSubmit = {loginSubmit} className=' flex flex-col item-center bg-white p-5 rounded-md'>
            <h1 className ="font-bold text-3xl self-center mb-4">Se Connecter</h1>
            <div className='flex flex-colmn mb-3'>
                <TextField  name ="email" id="outlined-basic"          
                          className='w-400' label="Adresse email" type ="email" variant="outlined" value = {loginEmail} onChange = {(e)=>setLoginEmail(e.target.value)} />
            </div> 

            <div className='flex flex-colmn mb-1'>
                <TextField id="outlined-basic" className ="w-400" label="Mot de passe" type ="password" value = {loginPassword} onChange = {(e)=>setLoginPassword(e.target.value)}          
          name ="password" variant="outlined" />
            </div>
            <Link className ="mb-3" to ="/forget-password">Mot de passe oubliè?</Link>
            <SaveButton type ="submit">Enregistrer</SaveButton> 
        </form>
    </div>
  )
}
