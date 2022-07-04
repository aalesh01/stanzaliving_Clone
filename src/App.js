import './App.css';
import React from 'react';
import Homepage from './Components/HomePage/homepage';
import WaBt from './Components/waBT/waBT';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Products from './Components/productPage/products';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <WaBt />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
