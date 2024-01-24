import React, { useContext, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { login } from './ApiCall'
import './Css/layout.css'
import { LoginContext } from '../Context/LoginContext'
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {


   const btnsty={
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
   
    
   }


  let navigator=useNavigate()
  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [mess,setMess]=useState('')


const handleLogin=async()=>{
  if(!email||!password){
    setMess('Please enter InputBox')
  }
  console.log('email',email,password)
 let {data}=await login(email,password)

  localStorage.setItem('Email', data[0].email);
  localStorage.setItem('name', data[0].name);
  localStorage.setItem('role', data[0].role);

  // navigator("/adduser")
  if(data[0].role=='Admin'){
    navigator("/addUser")
  }else{

    navigator("/Home")
  }


}

  return (
    <div className='loginsty'>
    <label>UserNmae</label>
      <input  placeholder='Enter Email' value={email} onChange={(evant)=>{
         setMess('')
        setEmail(evant.target.value)}}/><br/>
        <br/>
        <label>Password</label>
      <input placeholder='Enter passWord'  value={password} onChange={(evant)=>{
        setMess('')
        setPassword(evant.target.value)}}/><br/><br/>
      {mess&&<h4>{mess}</h4>}
      <div style={{marginLeft:"60px"}}>
      <button style={btnsty}  onClick={()=>handleLogin()} >Login</button>
     </div>
      
      </div>
  )
}

export default Login