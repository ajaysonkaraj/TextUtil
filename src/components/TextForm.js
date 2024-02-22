// import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case !!" ,"success");

  };
  const handleLcClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case !!" ,"success");

  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopy =()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied" ,"success");
  }

  const handleExtraSpace = ()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra spaces" ,"success");

  }

  const handleClear =()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text cleared" ,"success");

  }


  const [text, setText] = useState("");

  return (
    <div style={{color:props.mode==='dark'?'white':'#343a40'}} id="home">
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control " value={text} onChange={handleOnChange}
        style={{backgroundColor:props.mode==='dark'?'#22303c':'white',color:props.mode==='dark'?'white':'#343a40'}} id="myBox" rows="7"
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLcClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>

      <div className=" border border-secondary-subtle border-1 rounded-3  my-4">
        <h2 className="mx-4">Your Text Summary</h2>
        <p className="mx-4">Total words are {text.split(" ").length} ,Total Characters are {text.length}</p>
      </div>
      <div className="border border-secondary-subtle border-1 rounded-3">
        <h2 className="mx-4">Preview</h2>
        <p className="mx-4">{text.length>0?text:"Enter somthing to preview here.....!!"}</p>
      </div>
    </div>
  );
}
