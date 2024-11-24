import React from 'react'
import './App.css';
import  HexHeader  from './Components/HexHeader'
import HexMainPage from './Components/HexMainPage';
import HexCards from './Components/HexCards'
import HexSlider from './Components/HexSlider';
import HexFeature from './Components/HexFeature';
import HexSupportedLogo from './Components/HexSupportedLogo'
import HexPlatformSupported from './Components/HexPlatformSupported';
import HexSignup from './Components/HexSignup';
import HexFooter from './Components/HexFooter';


function App() {
  return (
    <div className="App">
      <HexHeader />
    <main>
     <HexMainPage/>
      <HexCards />
      <HexSlider />
      <HexFeature />
      <HexSupportedLogo />
      <HexPlatformSupported />
      <HexSignup />
   
    </main>
    <footer>
    <HexFooter />
      </footer>
    </div>
  );
}

export default App;
