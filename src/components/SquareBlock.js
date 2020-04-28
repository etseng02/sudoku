import React, {useState, useEffect} from 'react';
import '../styles/squareblock.scss'

const SquareBlock = ({data, fn, blockid, selectedSquare}) => {
  
  const [number, setNumber] = useState({
  });

  useEffect(()=>{
    if (data) {
      setNumber(number => ({
        ...number,
        one: data[0][0],
        two: data[0][1],
        three: data[0][2],
        four: data[1][0],
        five: data[1][1],
        six: data[1][2],
        seven: data[2][0],
        eight: data[2][1],
        nine: data[2][2],
      }))
    }
    },[data])

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
        <Square id={1} blockid={blockid} display={number.one}/>
        <Square id={2} blockid={blockid} display={number.two}/>
        <Square id={3} blockid={blockid} display={number.three}/>
        <Square id={4} blockid={blockid} display={number.four}/>
        <Square id={5} blockid={blockid} display={number.five}/>
        <Square id={6} blockid={blockid} display={number.six}/>
        <Square id={7} blockid={blockid} display={number.seven}/>
        <Square id={8} blockid={blockid} display={number.eight}/>
        <Square id={9} blockid={blockid} display={number.nine}/>
      </div>
    </div>
  )
}

export default SquareBlock