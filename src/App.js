import './App.css';
import Homepage from './components/homepage/homepage';
import WaBt from './components/waBT/waBT';
import  Navbar  from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Homepage />
       <WaBt />
    </div>
  );
}

export default App;
