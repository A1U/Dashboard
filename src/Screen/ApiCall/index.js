

export const login=async(username,password)=>{

   
const url = 'http://localhost:5000/login';




const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', 
  },
  body: JSON.stringify({username,password}) 
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

export const addUserData=async(username,companyname,password)=>{
const url = 'http://localhost:5000/userAdd';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', 
  },
  body: JSON.stringify({username,companyname,password}) 
};
let response=await fetch(url, options)
let data= response.json()
return data



}
export const addChargerdata=async(serialno, usernames, type, validity)=>{
  const url = 'http://localhost:5000/addchargers';

  const options ={  
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
   
    },
    body: JSON.stringify({serialno, usernames, type, validity}) 

       
  };

  console.log(options)
  let response=await fetch(url, options)
  let data= response.json()

  return data
} 

export const getCharger=async(id)=>{
  const url=`http://localhost:5000/getcharger`

  let response=await fetch(`${url}/${id}`)
  let data= response.json()

  return data
  

}


// export const getAllUserApi=async()=>{
//   const url = 'http://localhost:5000/getUser';

// const options = {
//   method: 'get',
//   headers: {
//     'Content-Type': 'application/json', 
//   }
  
// };
// let response=await fetch(url, options)
// let data= response.json()
// return data

// }

//  export const getAllchargerDetailApi= async()=>{
//   const url = 'http://localhost:5000/getchargerdetail';


//   const options = {
//     method: 'get',
//     headers: {
//       'content-Type': 'application/json'
//     }

//   };
//   let response=await fetch(url,options)
//   let data = response.json()
// return data;


//  }






// export const deleteUser=async(id)=>{
//   const url = 'http://localhost:5000/deleteUser';

// const options = {
//   method: 'delete',
//   headers: {
//     'Content-Type': 'application/json', 
//   }
  
// };
// let response=await fetch(`${url}/${id}`, options)
// let data= response.json()
// return data

// }