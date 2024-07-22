import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import SE from './Pages/SE'
import SELite from './Pages/SELite'
import SEMax from './Pages/SEMax'
import CompareAll from './Pages/CompareAll'
import About from './Pages/About'
import Rentals from './Pages/Rentals'
import Prebook from './Pages/Prebook'
import Footer from './Components/Footer'
import ContactUs from './Pages/ContactUs'
import Cursor from './Components/Cursor'

const App = () => {
  return (
    <BrowserRouter>
    <Cursor/>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/rentals" element={<Rentals/>}/>
            <Route path="/se" element={<SE/>}/>
            <Route path="/selite" element={<SELite/>}/>
            <Route path="/semax" element={<SEMax/>}/>
            <Route path="/compareAll" element={<CompareAll/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/prebook" element={<Prebook/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App