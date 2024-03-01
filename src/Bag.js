import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlusCircle } from 'react-icons/fa';
import { FaCircleMinus } from "react-icons/fa6";
import {proQtyInc, proQtyDec,cartproductRemove} from "./productslice";
import { IoTrashBinSharp } from "react-icons/io5";
const Shop = () => {

   let netAmount= 0;
  const cartItem = useSelector((state)=>state.addtocart.cart);
    const dispatch = useDispatch();
    const productQntInc=(myid)=>{
         dispatch(proQtyInc(myid));
    }
    const productQntDec=(myid)=>{
         dispatch(proQtyDec(myid));
    }

    const productRemove =(myid)=>{
      dispatch(cartproductRemove(myid));
    }
   for(let i=0;i<cartItem.length;i++){
    netAmount+=cartItem[i].image*cartItem[i].quantity;
   }

  const productData=cartItem.map((key)=>{

          // netAmount+=key.image*key.quantity;

    return(
      <>
        <tr className='rowoheading'>
          <td><img src={"image/"+key.price} style={{width:"150px", height:"250px", border:"2px solid black",borderRadius:"5%",marginLeft:"10px"}}/></td>
          <td style={{fontSize:"18px"}}>{key.name}</td>
          <td >{key.detail}</td>
          <td>{key.image}</td>
          <td >
            <FaPlusCircle onClick={()=>{productQntInc(key.id)}} cursor="pointer"/>
              {key.quantity}
            <FaCircleMinus onClick={()=>{productQntDec(key.id)}} cursor="pointer"/>
          </td>
          <td>{key.image*key.quantity}</td>
          <td>
          <IoTrashBinSharp onClick={()=>{productRemove(key.id)}} style={{width:"20px",height:"20px"}} />
          </td>
          <tr>
          <td colSpan="7">
            <hr size="3" color='red'/>
          </td>
          </tr>
        </tr>
      </>
    )
  })

  return (
    
    <>
       <h1 style={{display:"grid", justifyContent:"center"}}>Product Bag</h1>

       <table width="90%" align='center' className='rowoheading-1'>
          <tr className='bor'>
            <td >Image</td>
            <td >Product Name</td>
            <td>Product detail</td>
            <td>Product Price</td>
            <td>Product Quantity</td>
            <td>Product T.Price</td>
            <td>Remove Product</td>
          </tr>
          {productData}
       </table>
       <div className='netAmount'>
          Total Amount :{netAmount}
         </div>

         <div style={{display:"grid",justifyContent:"center"}}> 
          <Link className='btn-5' to="/buynow">Buy Now!</Link>
           
         </div> 
       <hr size="2" color='red'/>
    </>
  )
}

export default Shop;