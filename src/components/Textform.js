import React from 'react'

export default function Textform(props) {
  return (
    <div>
      <div className="container my-3">
        <div className="container">
            <h1> {props.heading} </h1>
            <p> Enter text to Utilize </p>
            <textarea className="form-control" placeholder="Enter Text " id="floatingTextarea2" style={{height:'100px'}}></textarea>
        </div>
      </div>
    </div>
  )
}
