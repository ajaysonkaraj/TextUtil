import { useState } from "react";
import "./App.css"; // importing css file
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

// let name = " my name is ajay , how are you guys!!!";

function App() {
  //component function

  const[mode, setMode] =useState('light');

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.background= '#192734'
    }
    else{
      setMode('light')
      document.body.style.background= 'white'

    }
  }

  return (
    <div >
      <Navbar  title="TextUtils"  about="About"  mode={mode} toggleMode={toggleMode} />
      <div className="container">
      <TextForm heading="Enter the text to analyze belove" mode={mode}/>
      <About mode={mode}/>
      </div>
       
    </div>
  );
}

export default App;
