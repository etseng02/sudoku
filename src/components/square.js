import React, {useState, useEffect} from 'react';
import '../styles/square.scss'

const Square = (props) => {
  
  const [number, setNumber] = useState({
    one: null
  });

  useEffect(()=>{
    if (props.data) {
      setNumber(number => ({
        ...number,
        one: props.data[0][0],
        two: props.data[0][1],
        three: props.data[0][2],
        four: props.data[1][0],
        five: props.data[1][1],
        six: props.data[1][2],
        seven: props.data[2][0],
        eight: props.data[2][1],
        nine: props.data[2][2],
      }))
    }
    },[props])


  return (
    <div className="container">
      <div className="grid">
        <div className="cell" id="1">{number.one}</div>
        <div className="cell" id="2">{number.two}</div>
        <div className="cell" id="3">{number.three}</div>
        <div className="cell" id="4">{number.four}</div>
        <div className="cell" id="5">{number.five}</div>
        <div className="cell" id="6">{number.six}</div>
        <div className="cell" id="7">{number.seven}</div>
        <div className="cell" id="8">{number.eight}</div>
        <div className="cell" id="9">{number.nine}</div>
      </div>
    </div>
  )
}




export default Square