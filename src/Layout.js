import { Outlet,Link } from "react-router-dom";
import Header from "./header";
import logo from "./img/Santosh logo.png";
 import { FaFacebook,FaSearch,FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
const Layout = () => {
   const mycartData = useSelector((state)=>state.addtocart.cart);
   const proCount = mycartData.length;

  return (
    <>
       <div className="header">
        <div>Cybrom Technology Pvt. Ltd Cybrom123@gmail.com </div>
       <div>
       Privacy Policy / Terms of Use / Sales and Refunds
       </div>
        </div>
      <div className="navbar">
        <div className="logo">
        <img id="logo1" src={logo}/>
        </div>
        <div className="menu-link">
        <Link className="menu-link-color" to="home">Home</Link>
        <Link className="menu-link-color" to="about">About</Link>
        <Link className="menu-link-color" to="product">Product</Link>
        <Link className="menu-link-color" to="service">Search</Link>
        <Link className="menu-link-color" to="contact">Contact</Link>
        </div>
        <div  className="sls">
          <FaSearch/>
          <FaFacebook/>
          <li>
            <div className="cartcount">

              {proCount==0? "":proCount}
              
            </div>
            <Link to="shop" className="shopbag">
              <FaCartArrowDown />
            </Link>
          
          </li>
        </div>  
      </div>
      <Outlet/>
      <Header/>
    </>
  )
}

export default Layout;