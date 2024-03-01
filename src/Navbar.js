import React from 'react'
import { FaYoutube, FaFacebook,FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
       <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>S</span>antosh
            <span>S</span>hriwas
          </h2>
        </div>
      <div className='menu-link'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Product</a></li>
          <li><a href='#'>Service</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>        
       <div className='social-media'>
          <ul className='social-media-desktop'>
             <li>
              <a href='#'><FaYoutube  className='You'/></a>
             </li>
             <li>
              <a href='#'><FaFacebook className='Face' /></a>
             </li>
             <li>
              <a href='#'><FaInstagram className='Insta' /></a>
             </li>
          </ul>
       </div>
       </nav>
    </>
  )
}
// ddddd
export default Navbar;