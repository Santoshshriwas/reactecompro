import React from "react";
import cod from "./img11/cod.jpg";
import { useNavigate } from "react-router-dom";
const Upi = () => {

  const mynavigate= useNavigate();
  const donePayment=()=>{
    mynavigate("../paymentDone")
  }
  return (
    <>
      <h4 style={{ display: "flex", justifyContent: "center" }}>
        Enter Your COD Detels
      </h4>
      <img
        style={{ width: "400px", height: "200px", marginLeft: "50px" }}
        src={cod}
      />
      <br/>
    

    <br/>
    <button type="submit" style={{marginLeft:"200px"}} className="btn-5" onClick={donePayment}>Proceed</button>
    </>
  );
};

export default Upi;