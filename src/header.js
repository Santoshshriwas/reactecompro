import React from 'react'
import logo from "./img/Santosh logo.png";
const Header = () => {
  return (
    <>
       <footer>
        <div id="row">
            <div id="col">
                <img id="logo" src={logo}/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum velit id quisquam porro molestias quos officiis vitae maiores a magni distinctio quod, consequatur aliquid veniam provident odio maxime nesciunt doloremque facilis, consequuntur nobis. Nulla dolorem mollitia dolorum facere, facilis ipsam?
            </div>
            <div id="col">
                <h3>Office <div id="under-line"><span></span></div></h3>
                <p>Raisen Road</p>
                <p>Ashoka Garden,Bhopal</p>
                <p>Madhaya Pradesh ,PIN 462023,INDIA</p>
                <p id="email">Santosh@gmail.com</p>
                <h4>+91-0123456789</h4>
            </div>
            <div id="col">
                <h3>Links <div id="under-line"><span></span></div></h3>
            
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                
            </div>
            <div id="col">
                <h3>NewsLetter <div id="under-line"><span></span></div></h3>
                <form>
                    <i class="far fa-envelope"></i>
                    <input type="email" placeholder="Enter Your email ID" required/>
                    <button type="submit"><i class="fas fa-arrow-right"></i></button>
                </form>
                <div id="social-icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-whatsapp"></i>       
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-square-instagram"></i>         
                </div>
            </div>
        </div>
        <hr/>
        <p id="coright">Easy for use my website 0 2023 . All Right Reseved</p>
    </footer>
    </>
  )
}

export default Header;