
import React, { useEffect, useState } from 'react'
import { addUserData, deleteUser, getAllUserApi  } from './ApiCall'
import AddCharger from './addCharger'

function User() {
  const [username,setusername]=useState('')
  const [companyname,setcompanyname]=useState('')
  const [password,setPassword]=useState('')
  // const [userData,setUserData]=useState([])
  const [Id,setId]=useState('')
  // useEffect(()=>{
  //   getAllUser()

  // },[])

const handleAddUser=async()=>{
let data=await  addUserData(username,companyname,password)
console.log('data', data)
// getAllUser()
setusername('')
  setcompanyname('')
setPassword('')

}

// const getAllUser=async()=>{
//   let data=await getAllUserApi()
//   console.log('>>>>>>>>>>>>>',data)
//   setUserData(data.data)

// }



// const handleEdit=(id)=>{
//   let data=userData.find((item)=>item.id==id)
//   setusername(data.username)
// setcompanyname(data.companyname)
// setPassword(data.password)
// setId(data.Id)

// }
// const handleDelete=async(id)=>{
// let data=await  deleteUser(id)
// getAllUser()

//}
  return (
    <>
    <div style={{marginLeft: "20%", marginTop: "20px"}}>
    <label>Username</label>
      <input type="text" placeholder='UserName' value={username} onChange={(e)=>setusername(e.target.value)} style={{marginLeft: "50px"}}/><br/><br/>
      <label>companyName</label>
      <input type="text" placeholder='Enter CompanyName' value={companyname} onChange={(e)=>setcompanyname(e.target.value)} style={{marginLeft: "20px"}}/><br/><br/>
      <label>PassWord</label>
      <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{marginLeft: "60px"}}/><br/>

      <button style={{marginTop:"20px", marginLeft: "120px", height: "30px" , width: "100px", backgroundColor: "black" , color: "white"}} onClick={()=>handleAddUser()}>Save</button>

       <table border="1" style={{marginTop:"20px"}}>
        <thead>
           {/*<tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Action</th>
          </tr>*/}
        </thead> 
        <tbody>
           {/* {userData.map((data) => (
            <tr key={data?.id}>
              <td>{data?.id}</td>
              <td>{data?.username}</td>
              <td>{data?.companyname}</td>
              <td>{data?.password}</td>
              <td>{data?.role}</td>
              <td>  */}




                {/* <button >Edit</button>
                <button>Delete</button> */}
              {/* </td> */}
            {/* </tr> */}
          {/* )
         )
         } */}
        </tbody>
      </table>
<div>
       </div>
</div>

<div>
<AddCharger/>

</div>
    </>
  
  )}


export default User;