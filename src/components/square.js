import React from 'react';
import '../styles/square.scss'

const Square = (props) => {


  return (
    <div className="container">
      <div className="grid">
        <div className="cell" id="1">1</div>
        <div className="cell" id="2">2</div>
        <div className="cell" id="3">3</div>
        <div className="cell" id="4">4</div>
        <div className="cell" id="5">5</div>
        <div className="cell" id="6">6</div>
        <div className="cell" id="7">7</div>
        <div className="cell" id="8">8</div>
        <div className="cell" id="9">9</div>
      </div>
    </div>
  )
}


export default Square