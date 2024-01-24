import React, { useEffect, useState } from 'react'
import { addUserData, deleteUser, getAllUserApi } from './ApiCall'

function User() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [userData,setUserData]=useState([])
  const [Id,setId]=useState('')
  useEffect(()=>{
    getAllUser()

  },[])

const handleAddUser=async()=>{
let data=await  addUserData(name,email,password)
console.log('data')
getAllUser()
setName('')
setEmail('')
setPassword('')

}

const getAllUser=async()=>{
  let data=await getAllUserApi()
  console.log('>>>>>>>>>>>>>',data)
  setUserData(data.data)

}
const handleEdit=(id)=>{
  let data=userData.find((item)=>item.id==id)
  setName(data.Name)
setEmail(data.email)
setPassword(data.password)
setId(data.Id)

}
const handleDelete=async(id)=>{
let data=await  deleteUser(id)
getAllUser()

}
  return (
    <div>
      <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
      <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
      <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
      <button onClick={()=>handleAddUser()}>Add User</button>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data) => (
            <tr key={data?.id}>
              <td>{data?.id}</td>
              <td>{data?.Name}</td>
              <td>{data?.email}</td>
              <td>{data?.password}</td>
              <td>{data?.role}</td>
              <td>
                <button onClick={() => handleEdit(data.id)}>Edit</button>
                <button onClick={() => handleDelete(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    



    </div>
  )
}

export default User