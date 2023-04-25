import './App.css';
import Home from './home';
import Navbar from './navbar';
import logo from './img/logo.png';

import {BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Routes> 
        <Route path="/" element={<Navbar/> } /> 
        <Route path="/home" element={<Home/> } /> 
        </Routes>
   
   </BrowserRouter>
   
      
    </div>
  );
}

export default App;
