import React, { useState } from 'react'

export default function Textform(props) {

    const [text , setText] = useState(" ");
    
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

        setText(" ");
    }
    const removeSpace=()=>
    {
        let newText= text.split(/[  ]+/);
        setText(newText.join(" "));
    }
    const textCount=(text)=>
    {
        return text.split(/\s+/).filter((word) => word.length > 0).length;
    }
    const countPunctuation=(text)=>
    {
        let punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
        let count  = text.match(punctuationRegex);
        return count ? count.length: 0 ;
    }


  return (
    <div>
      <div className="container my-3 " style={{color:props.mode==="dark"?"white":'#042743'}}>
        <div className="container p-3">
            <h1> {props.heading} </h1>
            <p> Free Software Utility To Annalyze the words </p>
            <textarea className="form-control" placeholder="Enter Text " 
             style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}
            id="floatingTextarea2" value={text} onChange={handleOnChange} rows="6"></textarea>
        </div>

        <button type="button" onClick={handleUpperClick} className="btn btn-primary my-3 mx-2"> UpperCase </button>
        <button type="button" onClick={handleLowerClick} className="btn btn-primary my-3 mx-2"> LowerCase </button>
        <button type="button" onClick={handleClearText}className="btn btn-primary my-3 mx-2"> Clear Text </button>
        <button type="button" onClick={removeSpace}className="btn btn-primary my-3 mx-2">Remove Spaces</button>
      </div>

      <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2> Words Summary:</h2>
        <p> Words:  <span className='fw-bold'>{textCount(text)} </span> </p> 
        <p> Charachters: <span className='fw-bold'> {text.length} </span></p>
        <p> Punctuations: <span className='fw-bold'> {countPunctuation(text)} </span> </p>
        <p> Spaces : <span className='fw-bold'>  { text.split(" ").length>0?text.split(" ").length-1:'0' }  </span></p>
        <p> Time : <span className='fw-bold'> { 0.008 * text.length} </span> Minutes</p>   {/* time taken to read the world  */}
        <h3> Preview: </h3>
        <p> {text.length>0?text:"Enter Some text to preview it:"}</p>
      </div>


    </div>
    
  )
}
