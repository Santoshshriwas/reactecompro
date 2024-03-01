import React, { useState } from 'react'
import Product from "./database/product";
import Product1 from "./database/product1";
import { addData } from "./productslice";
import { useDispatch, useSelector } from "react-redux";
import pro1 from "./img/pro1.jpg";
const SearchProduct = () => {
 const [myproduct,setMyproduct]=useState("");
  var mystatus=false;
  const mycart = useSelector((state) => state.addtocart.cart);
  const dispatch = useDispatch();
  const mydataAdd = (id, name, detail, image, price, quantity) => {
    let productObj = {
      id: id,
      name: name,
      image: image,
      detail: detail,
      price: price,
      quantity: quantity,
    };
    dispatch(addData(productObj));
  };
 const displayProduct=(e)=>{
  setMyproduct(e.target.value)
 }
 const myAns = Product.map((key) => {
    let mystr=key.name;
    let status=mystr.toLowerCase().includes(myproduct.toLowerCase());
    if(status)
    {
      mystatus=true;
  return (
    <>
      <div className="cart-1">
        <img width="250" src={"image/" + key.image} />
        <h4>{key.name}</h4>
        <h5>{key.detail}</h5>
        <h1>{key.price}</h1>
        <button
          className="btn-2"
          onClick={() =>
            mydataAdd(
              key.id,
              key.name,
              key.detail,
              key.price,
              key.image,
              key.quantity
            )
          }
        >
          {key.button}
        </button>
      </div>
    </>
  );
 }
});

const myAns1 = Product1.map((key) => {

  let mystr=key.name;
    let status=mystr.toLowerCase().includes(myproduct.toLowerCase());
    if(status)
    {
      mystatus=true;
  return (
    <>
      <div className="Cart">
        <img width="230" height="170px" src={"image/" + key.price} />
        <h4>{key.name}</h4>
        <h2>{key.detail}</h2>
        <h1>{key.image}</h1>
        <button
          className="btn-2"
          onClick={() =>
            mydataAdd(
              key.id,
              key.name,
              key.detail,
              key.image,
              key.price,
              key.quantity
            )
          }
        >
          {key.button}
        </button>
      </div>
    </>
  );
        }
});


  return (
    <>
       <center>
         <h1> Search Your Products</h1>

         <input placeholder='Enter Your Product Name' value={myproduct}  type='text' style={{width:"300px"}} onChange={displayProduct}/>
         <div className="main-product-1">{myAns}</div>
         <div className="main-cart">
        <div>
          <img width="250px" height="400px" src={pro1} />
        </div>
        {myAns1}
      </div>
         {mystatus?"": <h2>No Data Found For This Products</h2>}
       </center>
    </>
  )
}

export default SearchProduct;