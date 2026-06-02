import React from 'react'
import Home from './Component/MyWebsite/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Product from './Component/pages/Products'
import Navbar from './Component/MyWebsite/Navbar'

function App() {
  return (
    <>  
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
