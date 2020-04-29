import React from 'react';
import '../styles/button.scss'


const Button = (props) => {


  if (props.text === "Start") {
    return (
      <div className={"start"} onClick={()=> props.fn(props.numbers)}>
        <h1>{props.text}</h1>
      </div>
    );
  } else if (props.className === "input-button" && props.selectedNumber === parseInt(props.text,10)) {
    return (
      <div 
        className ={"selected-number"}
        onClick={()=>props.fn(parseInt(props.text, 10))}>
        <h1>{props.text}</h1>
      </div>
    );
  } else if (props.className === "input-button" && props.selectedNumber !== props.text) {
    return (
      <div 
        className ={props.className}
        onClick={()=>props.fn(parseInt(props.text, 10))}>
        <h1>{props.text}</h1>
      </div>
    );
  }
}

export default Button;