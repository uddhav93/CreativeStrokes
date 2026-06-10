import React, { useState } from 'react'
import Home from './Component/MyWebsite/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Component/pages/Products'
import Navbar from './Component/MyWebsite/Navbar'
import statContext from './Component/contextfile/statContext'
import product from './Component/data/product.json'
import testimonial from './Component/data/testimonials.json'
import Cart from './Component/pages/Cart'


function App() {
  const [cart,setCart]=useState([])
  return (
    <>
      <statContext.Provider value={{product,testimonial,cart,setCart}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </statContext.Provider>
    </>
  )
}

export default App
