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
    height: "30px",
    width: "80px",
    color: "white",
    fontWeight: "bold",
   
   }

  let navigator=useNavigate()
  
  const [username,setusername]=useState('')
  const [password,setPassword]=useState('')
  const [mess,setMess]=useState('')


const handleLogin=async()=>{
  if(!username||!password){
    setMess('Please enter InputBox')
  }
  console.log(username,password)
 let {data}=await login(username,password)

  localStorage.setItem('username', data[0].username);
  localStorage.setItem('password', data[0].password);


  localStorage.setItem('companyname', data[0].companyname);
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
    <label style={{backgroundColor: "white", }}>UserName</label><br/>
      <input  style={{backgroundColor: "white",  marginTop:"10px"}} placeholder='Enter Username' value={username} onChange={(evant)=>{
         setMess('')
        setusername(evant.target.value)}}/><br/>
        <br/>
        <label style={{backgroundColor: "white", }}>Password</label><br/>
      <input style={{backgroundColor: "white",   marginTop:"10px"}} placeholder='Enter passWord'  value={password} onChange={(evant)=>{
        setMess('')
        setPassword(evant.target.value)}}/><br/><br/>
      {mess&&<h4>{mess}</h4>}
      <div style={{marginLeft:"50px"}}>
      <button style={btnsty}  onClick={()=>handleLogin()} >Login</button>
     </div>
      </div>
  )
}

export default Login;