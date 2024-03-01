
import React from "react";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
const App = () => {
   const theme= {
    colors: {
      bg: "#000",
    },
   };

  return(
    <>
       <ThemeProvider theme={theme}>
       <Router>
        <GlobalStyle />
         <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/about"  element={<About/>}/>
          <Route path="/products"  element={<Products/>}/>
          <Route path="/contact"  element={<Contact/>}/>
          <Route path="/singalproduct/:id"  element={<SingleProduct/>}/>
          <Route path="/cart"  element={<Cart/>}/>
          <Route path="*" element={<ErrorPage/>}/>
         </Routes>
       </Router>
       </ThemeProvider>
    </>
  )
};

export default App;