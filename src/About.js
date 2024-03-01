import React from 'react'
import team1 from "./img/team1.jpg"
import team2 from "./img/team2.jpg"
import team3 from "./img/team3.jpg"
const About = () => {
  return (
    <>
   <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
   </div>
<h2 style={{textAlign:"center"}}>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src={team1} style={{width:"100%"}}/>
      <div class="container">
        <h2>Abhishek Yaduwanshi</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>abhi.yd1437@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={team2} style={{width:"100%"}}/>
      <div class="container">
        <h2>Ankit Bhatt</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>ankitbhat@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src={team3} style={{width:"100%"}}/>
      <div class="container">
        <h2>Santosh Shriwas</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>santosh@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default About;