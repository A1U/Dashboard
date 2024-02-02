import React from 'react'
import Layout from './Layout'
import { Button, Form } from 'react-bootstrap';
import AcCharger from './Charger/acCharger';

import "./Css/charger.css"
import DCcharger from './Charger/DCcharger';
import Type2Chargers from './Charger/Type2Chargers'




function Charger_detail() {




 
  return (
    
    <div>
  
    

<div style={{marginTop: "10px", backgroundColor: "yellow"}}>

    <h1 style={{textAlign: "center"}}>
      AC Charger Charger Details
    </h1>


    <div style={{display: "flex" , marginLeft: "11rem", marginRight: "50px",  gap: "29rem"}}>
    <div>
    <h3>serial no</h3>
      <input style={{backgroundColor: "white", border: "3px solid black", borderRadius: "10px", fontWeight: "bold", height: "40px", width:"90px"}}></input>
    </div>
    <div>
    <h3>Type</h3>
      <input style={{backgroundColor: "white", border: "3px solid black", borderRadius: "10px", fontWeight: "bold", height: "40px", width:"90px"}}></input>    </div>
  <div>
  <h3>validity</h3>
      <input style={{backgroundColor: "white", border: "3px solid black", borderRadius: "10px", fontWeight: "bold", height: "40px", width:"90px"}}></input>  </div>
    </div>
  
   <div style={{display: "flex", gap: "10px", paddingTop: "10pxs" , backgroundColor: "yellow" , paddingRight:""}}>

   <AcCharger/>
   
 
   
      </div>
    </div>



    <div style={{marginTop: "30px", backgroundColor: "yellow"}}>

<h1 style={{textAlign: "center"}}>
  Type2 Charger Charger Details
</h1>

<div style={{display: "flex", gap: "10px", paddingTop: "10pxs" , backgroundColor: "yellow" , paddingRight:""}}>

<Type2Chargers/>



  </div>
</div>









    <div>


   <div style={{marginTop: "30px", backgroundColor: "yellow"}}>

    <h1 style={{textAlign: "center"}}>
      DC Charger Charger Details
    </h1>
  
   <div style={{display: "flex", gap: "10px", paddingTop: "10pxs" , backgroundColor: "yellow" , paddingRight:""}}>

   <DCcharger/>
   <div>


   



   </div>
   
      </div>
    </div>

   </div>
    </div>
  
  )
}

export default Charger_detail;
