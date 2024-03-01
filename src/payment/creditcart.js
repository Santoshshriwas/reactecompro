import React from 'react'
import { useNavigate } from 'react-router-dom';

const Creditcart = () => {

  const mynavigate= useNavigate();
  const donePayment=()=>{
    mynavigate("../paymentDone")
  }
  return (
    <>
    <h4 style={{display:"flex",justifyContent:"center"}}>Enter Your Card Detels</h4>
    <form className="credit-card">
 
  <div className="form-body">
    <input type="text" className="card-number"  maxLength="16" placeholder="Card Number"/>
    <div className="date-field">
      <div className="month">
        <select name="Month">
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </div>
      <div className="year">
        <select name="Year">
          <option value="2016">2021</option>
          <option value="2017">2022</option>
          <option value="2018">2023</option>
          <option value="2019">2024</option>
          <option value="2020">2025</option>
          <option value="2021">2026</option>
          <option value="2022">2027</option>
          <option value="2023">2028</option>
          <option value="2024">2029</option>
        </select>
      </div>
    </div>
    <div className="card-verification">
      <div className="cvv-input">
        <input maxLength="3" type="text" placeholder="CVV"/>
      </div>
      <div className="cvv-details">
        <p>3 or 4 digits usually found <br/> on the signature strip</p>
      </div>
    </div>
 
    <button type="submit" className="btn-5" onClick={donePayment}>Proceed</button>
    
  </div>
</form>
    

   </>
  )
}

export default Creditcart;