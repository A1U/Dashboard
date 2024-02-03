import React, { useContext, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { login } from './ApiCall'
import './Css/layout.css'
import { LoginContext, useUserInfo } from '../Context/LoginContext'
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  const {userInfo,setUserInfo}=useUserInfo()
 


   const btnsty={
    backgroundColor: "black",
    height: "30px",
    width: "80px",
    color: "white",
    fontWeight: "bold",
   
   }

  let navigator=useNavigate()
  
  const [username,setusername]=useState('')
  const [password,setPassword]=useState('')
  const [messages,setMessages]=useState('')


const handleLogin=async()=>{
  if(!username||!password){
    setMessages('Please enter InputBox')
  }
  try{
 let {data}=await login(username,password)
 if(Array.isArray(data)&&data.length>0){
 setUserInfo(data[0])


  if(data[0].role=='Admin'){
    navigator("/addUser")
  }else{

    navigator("/Home")
  }
}else{
  setMessages(' password or username is not correct')
}
}catch(e){
  console.log('show mess',e)
}


}

  return (
    <div className='loginsty'>
    <label style={{backgroundColor: "white", }}>UserName</label><br/>
      <input  style={{backgroundColor: "white",  marginTop:"10px"}} placeholder='Enter Username' value={username} onChange={(evant)=>{
         setMessages('')
        setusername(evant.target.value)}}/><br/>
        <br/>
        <label style={{backgroundColor: "white", }}>Password</label><br/>
      <input style={{backgroundColor: "white",   marginTop:"10px"}} placeholder='Enter passWord'  value={password} onChange={(evant)=>{
        setMessages('')
        setPassword(evant.target.value)}}/><br/><br/>
      {messages&&<h4>{messages}</h4>}
      <div style={{marginLeft:"50px"}}>
      <button style={btnsty}  onClick={()=>handleLogin()} >Login</button>
     </div>
      </div>
  )
}

export default Login;