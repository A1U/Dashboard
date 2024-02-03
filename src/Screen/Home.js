// import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Css/home.css"
 import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 import Charger_detail from "../Screen/charger_detail"
import { useState } from 'react';
import { getCharger } from './ApiCall';



 const Home = () => {
  // const [serialno, setSerialno]= useState('');
  // const [selectedItem, setSelectedItem] = useState('');
  const [charger,setCharger]=useState('')
  const [messages,setMessages]=useState('')
  const navigator =useNavigate();
  const chargerdetail=async()=>{

    if(charger){
   
     let {data}= await getCharger(charger)
     console.log('datadata',data)
     if(Array.isArray(data)&&data.length>0){


      navigator("/charger_detail",{state:data})
     }
     setMessages('Not Match Serial No')



    }else{
      setMessages('Enter The Charger Serial no')
    }


   

  }
 
    // select charger id



  //  const handleSelect = (e) => {
  //   setSelectedItem(e.target.value);
     // You can add your custom logic here when an item is selected
  //  };

  return (
    <div  className='dropd' style={{marginLeft: "40%", marginTop: "50px"}}>

   
    
  

      <div>
      <h2>Charger Serial no.</h2>
        <input type="text"  placeholder='Charger serial no.' value={charger} onChange={(e)=>{
          setMessages('')
          setCharger(e.target.value)
        
        }} style={{height: "50px", width: "190px", border: "5px solid black", borderRadius: "10px" }}/>
      </div>
      {messages&&<div style={{color:'red'}}>{messages}</div>}
     <div >


    {/*  */}
     
      <Button  className='gobtn' onClick={chargerdetail} style={{color: "black"}} >Go</Button>
     
     </div>
  
    
    </div>
  );
};

export default Home;
