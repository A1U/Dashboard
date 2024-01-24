

export const login=async(email,password)=>{

   
const url = 'http://localhost:5000/login';




const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', 
  },
  body: JSON.stringify({email,password}) 
};


let response=await fetch(url, options)
let data= response.json()
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json(); 
//   })
//   .then(data => {
   
//     console.log('POST request successful:', data);
//     results= data
//   })
//   .catch(error => {
  
//     console.error('Error during POST request:', error);
//   });

  return data;

}

export const addUserData=async(name,email,password)=>{
const url = 'http://localhost:5000/userAdd';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', 
  },
  body: JSON.stringify({name,email,password}) 
};
let response=await fetch(url, options)
let data= response.json()
return data


}

export const getAllUserApi=async()=>{
  const url = 'http://localhost:5000/getUser';

const options = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json', 
  }
  
};
let response=await fetch(url, options)
let data= response.json()
return data

}

export const deleteUser=async(id)=>{
  const url = 'http://localhost:5000/deleteUser';

const options = {
  method: 'delete',
  headers: {
    'Content-Type': 'application/json', 
  }
  
};
let response=await fetch(`${url}/${id}`, options)
let data= response.json()
return data

}