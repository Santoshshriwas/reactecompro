import React, { useState } from 'react'
import Creditcart from './payment/creditcart';
import Phonepe from './payment/phonepe';
import Upi from './payment/upi';
import Cod from './payment/cashonde';
const Buynow = () => {
const [pmethod,setPmethod]=useState("");

var myans= "";

const myPaymentMethod=(e)=>{
  let myval = e.target.value;
  setPmethod(myval);
}

switch (pmethod)
{
  case "card": myans=<Creditcart/>
               break;
  case "upi": myans=<Upi/>
               break;
  case "netbanking": myans=<Phonepe/>
               break;
  case "cod": myans=<Cod/>
               break;
}




  return (
    <>
      <h1 style={{display:"grid",justifyContent:"center"}}>Purchese Your Product</h1>
      <div className='server'>
  <div className='submit-add'>
    <center>
          <input type="text" id="lname" name="name" placeholder="Enter Your Frist Name.."/>
       <br/>
          <input type="text" id="lname" name="name" placeholder="Enter Your Last Name.."/>
       <br/>
    <input type="email" id="lname" name="email" placeholder="Enter Your Email.."/>
    <br/>
    
    <input type="text" id="lname" name="address" placeholder="Enter Your Address.."/>
    <br/>
        <input type="number" id="lname" name="pin-code" placeholder="Enter Your PIN_CODE.."/>
    <br/>
        <input type="number" id="lname" name="number" placeholder="Enter Your Number.."/>
    <br/>
    <label for="country">State</label>
    <select id="country" name="country">
      <option value="australia">Madhya Pradesh</option>
      <option value="canada">Uttar Pradesh</option>
      <option value="usa">Delhi</option>
      <option value="usa">Rajisthan</option>
    </select>
    <br/>
    <button className='btn-5'>Submit</button>
    </center>
   </div>
   <div className='submit-add-1'>
         <div id="paymetMethod">
          <h3>Select Your Payment Method</h3>
          <input type='radio' name='r1' value="card" onClick={myPaymentMethod}/>
          Credit/Debit Card
          <input type='radio' name='r1' value="upi" onClick={myPaymentMethod}/>
           UPI
          <input type='radio' name='r1' value="netbanking" onClick={myPaymentMethod}/>
          Netbanking
          <input type='radio' name='r1' value="cod" onClick={myPaymentMethod}/>
          COD
         {myans}
         </div>
     </div>
   </div>
    </>
  )
}

export default Buynow;