import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./Css/home.css"
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Charger_detail from "../Screen/charger_detail"


const items = [
  { id: 1, label: 'abs1' },
  { id: 2, label: 'aba2' },
  { id: 3, label: 'abs3' },
  { id: 4, label: 'abs4' },
  { id: 5, label: 'abs5' },
  { id: 6, label: 'abs6' },
  { id: 7, label: 'abs7' },
  { id: 8, label: 'abs8' },
  { id: 9, label: 'abs9' },
  { id: 10, label: 'abs10' },
  { id: 11, label: 'abs11' },
  { id: 12, label: 'abs12' },



];

const MySelectDropdown = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const navigator =useNavigate();
  const chargerdetail=()=>{

     navigator("/charger_detail")

  }
 
    // select charger id




  const handleSelect = (e) => {
    setSelectedItem(e.target.value);
    // You can add your custom logic here when an item is selected
  };

  return (
    <div  className='dropd' style={{marginLeft: "40%", marginTop: "50px"}}>

   
    <Form >
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label style={{backgroundColor: "yellow", color: "black",}}>Select an charger</Form.Label>
        <Form.Control
          as="select"
          value={selectedItem}
          onChange={handleSelect}
        style={{height: "50px", width:"250px"}}>
          <option value="" disabled>Select charger</option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
     <div >
   
      <Button  className='gobtn' onClick={chargerdetail} >Go</Button>
     
     </div>
    </Form>
    
    </div>
  );
};

export default MySelectDropdown;
