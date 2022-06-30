import Homepage from './components/homepage/homepage';
// import WaBt from './components/waBT/waBT';
// import { ChakraProvider,ColorModeScript } from '@chakra-ui/react'

import  { Navbar } from "./components/Navbar/Navbar"

import {BrowserRouter,Route,Routes} from "react-router-dom"
  
import './App.css';


function App() {
  return (
    <div className="App">
    
       <Navbar/>
      <Routes>
        <Route path='/'/>
      </Routes>
      
     <Homepage/>
     {/* <WaBt/> */}

    </div>
  );
}

export default App;
