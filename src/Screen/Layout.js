import React from 'react'
import './Css/layout.css'
import { Link, useNavigate } from 'react-router-dom'
import logo  from"../Screen/image/ghg.jpeg"
import { useUserInfo } from '../Context/LoginContext'
import { checkObject } from '../Util'
function Layout() {
  const {userInfo,setUserInfo}=useUserInfo()
  const navigate = useNavigate();
  console.log('role----',userInfo)

  const handleLogOut = () => {
 
    setUserInfo({});
  
   
    
  
    navigate('/login');
  };
  return (
    <div className="contanner">
   <h4><img className='logo' src={logo} alt='...'/></h4>
   <div className='menuList'>


  



   <Link className='Link' to="/">login</Link>

   <Link className='Link' to="/Home">Home</Link>
   <Link className='Link' to="/About">About</Link>
   {/* <Link className='Link' to="/addCharger">Add Charger</Link> */}
 {userInfo?.role=='Admin'&&
   <Link className='Link' to="/addUser">Add User</Link>}
 
   {checkObject(userInfo)&&
   <Link className='Link' onClick={()=>handleLogOut()} >log out</Link>}
   </div>




    </div>
  )
}

export default Layout