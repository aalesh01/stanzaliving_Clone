import './App.css';
import React from 'react';
import Homepage from './Components/HomePage/homepage';
import WaBt from './Components/waBT/waBT';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Homepage />
      <WaBt />
    </div>
  );
}

export default App;
