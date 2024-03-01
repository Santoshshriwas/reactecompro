import React, { useEffect, useState } from 'react'
import Loder from './Loder';

const PaymentDone = () => {

  const [isloding,setIsLoding]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
       setIsLoding(false);
    },3000)
  })
  return (
    <> 

    {isloding?(
       <div style={{display:"flex",justifyContent:"center"}}>
           <Loder/>
       </div>
    ):( <h1 style={{marginTop:"150px" , display:"flex",justifyContent:"center",marginBottom:"150px"}}>Thanks For Purchese Our Products We Well Provide <br/> Your Withen 5 to 7 days</h1>)}
        
    </>
  )
}

export default PaymentDone;