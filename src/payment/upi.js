import React from "react";
import upi from "./img11/upi3.png";
import { useNavigate } from "react-router-dom";
const Upi = () => {

  const mynavigate= useNavigate();
  const donePayment=()=>{
    mynavigate("../paymentDone")
  }
  return (
    <>
      <h4 style={{ display: "flex", justifyContent: "center" }}>
        Enter Your UPI Detels
      </h4>
      <img
        style={{ width: "400px", height: "120px", marginLeft: "50px" }}
        src={upi}
      />
      <br/>
    Enter Your UPI:  <input type="text" id="lname" name="name" placeholder="Enter Your Name.."/>

    <br/>
    <button type="submit" style={{marginLeft:"200px"}} className="btn-5" onClick={donePayment}>Proceed</button>
    </>
  );
};

export default Upi;
