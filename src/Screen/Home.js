// import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Css/home.css"
 import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 import Charger_detail from "../Screen/charger_detail"



 const Home = () => {
  // const [serialno, setSerialno]= useState('');
  // const [selectedItem, setSelectedItem] = useState('');
  const navigator =useNavigate();
  const chargerdetail=()=>{

     navigator("/charger_detail")

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
        <input type="text"  placeholder='Charger serial no.' style={{height: "50px", width: "190px", border: "5px solid black", borderRadius: "10px" }}/>
      </div>
     <div >


    {/*  */}
     
      <Button  className='gobtn' onClick={chargerdetail} style={{color: "black"}} >Go</Button>
     
     </div>
  
    
    </div>
  );
};

export default Home;
