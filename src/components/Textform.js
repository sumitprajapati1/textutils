import React, { useState } from 'react'

export default function Textform(props) {

    const [text , setText] = useState("");
    
    const handleOnChange=(event)=>
    {
        setText(event.target.value);
    }
    const handleUpperClick=()=>
    {
        let uppertext=text.toUpperCase();
        setText(uppertext);
    }
    const handleLowerClick=()=>
    {
        let lowertext=text.toLowerCase();
        setText(lowertext);
    }
    const handleClearText=()=>
    {

        setText(" ")
    }


  return (
    <div>
      <div className="container my-3">
        <div className="container p-3">
            <h1> {props.heading} </h1>
            <p> Free Software Utility To Annalyze the words </p>
            <textarea className="form-control" placeholder="Enter Text " id="floatingTextarea2" value={text} onChange={handleOnChange} style={{height:'100px'}}></textarea>
        </div>

        <button type="button" onClick={handleUpperClick} className="btn btn-primary my-3 mx-2"> UpperCase </button>
        <button type="button" onClick={handleLowerClick} className="btn btn-primary my-3 mx-2"> LowerCase </button>
        <button type="button" onClick={handleClearText}className="btn btn-primary my-3 mx-2"> Clear Text </button>
        <button type="button" className="btn btn-primary my-3 mx-2">Remove Spaces</button>
      </div>

      <div className="container my-3">
        <h2> Words Summary:</h2>
        <p> Words: </p> 
        <p> Charachters: </p>
      </div>


    </div>
    
  )
}
