import React from 'react'
import './Css/layout.css'
import { Link, useNavigate } from 'react-router-dom'
import logo  from"../Screen/image/ghg.jpeg"
function Layout() {
  let role=localStorage.getItem('role')
  let navigator=useNavigate()
  console.log('role----',role)

  const handleLogOut=()=>{
    localStorage.clear()
    navigator('/')
  }
  return (
    <div className="contanner">
   <h4><img className='logo' src={logo} alt='...'/></h4>
   <div className='menuList'>


  



   <Link className='Link' to="/">login</Link>

   <Link className='Link' to="/Home">Home</Link>
   <Link className='Link' to="/About">About</Link>
 {role=='Admin'&&
   <Link className='Link' to="/addUser">Add User</Link>}
 
  c
   {role&&
   <Link className='Link' onClick={()=>handleLogOut()} >log out</Link>}
   </div>




    </div>
  )
}

export default Layout