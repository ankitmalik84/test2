import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ContactForm from './Pages/ContactForm';

import AboutUs from './Pages/AboutUs';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import SwatchPawn from './Pages/SwatchPawn';

import './App.css'

function App() {
  return (
    <Router>

      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home />} />
          
          
          <Route  path='/swatch'  element={<SwatchPawn/>}  ></Route>
          
          
          <Route path='/aboutUs'   element={<AboutUs/>}   ></Route>
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
    
      <Footer/>
      
      
      
    </Router>
  );
}

export default App;
