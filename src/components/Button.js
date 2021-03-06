import React from 'react';
import '../styles/button.scss'


const Button = (props) => {

  if (props.text === "Solve") {
    return (
      <div 
        className={"solve"}
        onClick={()=> props.fn(props.numbers)}><h1>{props.text}</h1></div>
    );
  } else if (props.className === "input-button" &&  props.text === " ") {
    return (
      <div 
        className = "trash"
        onClick={()=>props.fn(null)}>
        <i className = "trash"class="fa fa-trash"></i>
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
  } else if (props.text.includes("Demo")){
    return (
      <div 
        className ={props.className}
        onClick={()=>props.fn(props.data)}>
        <h2>{props.text}</h2>
      </div>
    );
  } else if (props.text.includes("Clear Board")){
    return (
      <div 
        className ={props.className}
        onClick={()=>props.fn(props.data)}>
        <h2>{props.text}</h2>
      </div>
    );
  }


}

export default Button;