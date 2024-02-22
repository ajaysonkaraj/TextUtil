import { useState } from "react";
import "./App.css"; 
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
=======
// let name = " my name is ajay , how are you guys!!!";

>>>>>>> 1b552d1ce892d7b566a2dc9d848fa06da7a7fd95
function App() {
  
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#192734";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>
      <div className="container">
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/"  element={<TextForm showAlert={showAlert} heading="Enter the text to analyze belove" mode={mode}/>}>  
          </Route>
            <Route exact path="/about" element={<About mode={mode}/>}>           
          </Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
