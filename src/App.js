import React from 'react'
import {Routes ,Route ,useNavigate} from "react-router-dom"
import Login from './components/login/Login'
import Home from './components/home/home'
import ForgetPassword from './components/login/ForgetPassword'
import "./App.css"

export default function App() {
  return (
    <div className='h-screen overflow-y-screen'>
    <Routes>
      <Route exact path ="/*" element = {<Home/>}/>
      git remote add origin https://github.com/lenzLLL/react-gh-pages.git
      <Route path = "/login" element = {<Login/>} />
      <Route path ="/forget-password" element = {<ForgetPassword/>}/>
    </Routes>
    </div>
  )
}
