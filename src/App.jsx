import React from 'react'
import Home from './Pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/shop' element={<Shop />}  />
          <Route path='/cart' element={<Cart />}  />
          <Route path='/contact' element={<Contact />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
