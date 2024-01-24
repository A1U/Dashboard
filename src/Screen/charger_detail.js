import React from 'react'
import Layout from './Layout'

function Charger_detail() {




    console.log("hello detail")
  return (
    
    <div>
    

<div style={{marginTop: "50px", backgroundColor: "yellow", marginLeft:"30%", marginRight: "30%", paddingLeft: "30px", paddingRight:"30px"}}>

    <h1>
        Charger Details
    </h1>
    <div>
        <p>Serial Number<span style={{paddingLeft: "100px"}}> <input type='text' /></span></p>
        <p>Charger Box Id <span style={{paddingLeft: "100px"}}> <input type='text' /></span></p>
        <p>Url  <span style={{paddingLeft: "180px"}}> <input type='text' /></span></p>
        <p>Connectivity<span style={{paddingLeft: "110px"}}> <input type='text' /></span></p>
        <p>Downtime <span style={{paddingLeft: "130px"}}> <input type='text' /></span></p>
        <p>Charger Current Status<span style={{paddingLeft: "40px"}}> <input type='text' /></span> </p>
       
    </div>
      
    </div>
    </div>
  )
}

export default Charger_detail;
