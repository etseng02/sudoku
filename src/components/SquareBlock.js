import React, {useState, useEffect} from 'react';
import '../styles/squareblock.scss'

const SquareBlock = ({data, fn, blockid, selectedSquare}) => {

  const Square = ({display, id, blockid}) => {

    if (blockid === selectedSquare[0] && id === selectedSquare[1]){
      return <div className="selected-cell" onClick={()=>fn(blockid, id)}>{display}</div>
    } else {
      return <div className="cell" onClick={()=>fn(blockid, id)}>{display}</div>
    }
  }


  return (
    <div className="container">
      <div className="grid">
        <Square id={1} blockid={blockid} display={data[0][0]}/>
        <Square id={2} blockid={blockid} display={data[0][1]}/>
        <Square id={3} blockid={blockid} display={data[0][2]}/>
        <Square id={4} blockid={blockid} display={data[1][0]}/>
        <Square id={5} blockid={blockid} display={data[1][1]}/>
        <Square id={6} blockid={blockid} display={data[1][2]}/>
        <Square id={7} blockid={blockid} display={data[2][0]}/>
        <Square id={8} blockid={blockid} display={data[2][1]}/>
        <Square id={9} blockid={blockid} display={data[2][2]}/>
      </div>
    </div>
  )
}

export default SquareBlock