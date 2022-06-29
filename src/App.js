import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import StanzaSpeak from './Components/HomePage/StanzaSpeak';

function App() {
  return (
    <ChakraProvider >
     <StanzaSpeak/>
    </ChakraProvider>
  );
}

export default App;
