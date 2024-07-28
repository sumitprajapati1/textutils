import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  const [color,setColor]=useState("light");
 const tooglemode=()=>{
  if(color=="light")
  {
    setColor("dark");
    document.body.style.backgroundColor= "#042743";
  }
  else
  {
    setColor("light");
    document.body.style.backgroundColor="white";
  }
 }
  return (
    <>
    <Navbar color={color} tooglemode={tooglemode}/>
    <Textform heading="Text Analyzer" color={color}></Textform>
    </>
  );
}

export default App;
