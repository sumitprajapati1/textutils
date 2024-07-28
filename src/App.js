import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
function App() {
  const [mode,setMode]=useState("light");
 const toggleMode=()=>{
  if(mode==="light")
  {
    setMode("dark");
    document.body.style.backgroundColor= "#042743";
  }
  else
  {
    setMode("light");
    document.body.style.backgroundColor="white";
  }
 }
  return (
   <Router>
     <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3 p-3">
    <Routes>
        <Route path='/About' element={<About/>}/> 
        <Route path='/' element={ <Textform heading="Text Analyzer" mode={mode}/>}/>
    </Routes>
    </div>
    </>
   </Router>
  );
}

export default App;
