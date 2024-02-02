import React, { useEffect, useState } from 'react'
import {addChargerdata, getAllchargerDetailApi} from './ApiCall'
// import axios from axios;

function AddCharger() {
  const [selectoption, setselectoption]=useState('');
  const [selecttime,setselecttime]=useState('');
  const [serialno, setSerialno]= useState('');
  const [usernames, setusernames ] = useState("");
  // const [chargerdetail, setchargerdetail]= useState("");

  const [type, setType] = useState("");
  const [validity, setValidity]= ("");
  const [Id,setId]=useState('')
  

  const getCgarger=()=>
{
let data 
}

  // const handleSelectChange = (event) => {

  //   setselectoption(event.target.value);
  // }; 
  // const handleselecttime=(e)=>{
  //   setselecttime(e.target.value);
  // }

  console.log('rahul--',serialno,usernames,selectoption,selecttime)


  const handleAddCharger=async(event)=>{
    console.log('rahul',serialno,usernames,selectoption,selecttime)
  let data= await addChargerdata(serialno,usernames,selectoption,selecttime);
    // console.log(data);
    setSerialno('')
    setusernames('')
    setType('')
    setselecttime('')



}




  

 
  return (
   <>
<div style={{marginLeft: "60%"}}>
<button type="button" class="btn btn-dark" id='serialno' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Charger</button>


</div>
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button> */}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Charger</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label" >Serial no. </label>
            <input type="text" class="form-control" id="recipient-name" name='serialno' value={serialno} onChange={(e)=>setSerialno(e.target.value)}/>
          </div>


          <div class="mb-3">
            <label for="recipient-name" class="col-form-label" >Username</label>
            <input type="text" class="form-control" id="recipient-name" name='usernames' value={usernames} onChange={(e)=>setusernames(e.target.value)}/>
          </div>

          
          <select class="form-select mb-3" aria-label="Default select example"name='type' value={selectoption} onChange={(e)=>setselectoption(e.target.value)}>
  <option selected>Type</option>
  <option value='Ac Charger'>AC Charger</option>
  <option value='Type2 Charger'>Type2 Charger</option>
  <option value='dc Charger'>DC Charger</option>
</select>



<div>

<select class="form-select mb-3" aria-label="Default select example" value={selecttime} name='validity' onChange={(e)=>setselecttime(e.target.value)}>
  <option selecte>Validity</option>
  <option value="1 month">2 month</option>
  <option value="2 month">2 month</option>
  <option value="3 month">3 month</option>
  <option value="4 month">4 month</option>

  <option value="5 month">5 month</option>
  <option value="6 month">6 month</option>
  <option value="7 month">7 month</option>
  <option value="8 month">8 month</option>
  <option value="9 month">9 month</option>
  <option value="10 month">10 month</option>
  <option value="11 month">11 month</option>
  <option value="1 year">1 year</option>
  <option value="2 year">2 year</option>
  <option value="3 year">3 year</option>
  <option value="4 year">4 year</option>
  <option value="5 year">5 year</option>
  
</select>
</div>





        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={handleAddCharger}>Add Charger</button>
      </div>
    </div>
  </div>
</div>






   </>
  )
}

export default AddCharger
