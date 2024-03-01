import React from 'react'
import Layout from './Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Shop from './Bag'
import Buynow from './Buynow'
import PaymentDone from './payment/paymentDone'
import SearchProduct from './SearchProduct'
// import Navbar from './Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="shop" element={<Shop/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="buynow" element={<Buynow/>}/>
            <Route path="service" element={<SearchProduct/>}/>
            <Route path="paymentDone" element={<PaymentDone/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
