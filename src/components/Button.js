import React from 'react';
import '../styles/button.scss'


const Button = (props) => {

  return (


        <div
        className="start" 
        onClick={()=> props.fn(props.numbers)}>
          <h1>{props.text}</h1>
        </div>
    


  )

}

export default Button;