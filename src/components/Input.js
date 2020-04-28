import React, {useState} from 'react';
import Button from './Button.js'
import '../styles/input.scss'

const Input = (props) => {

  const [selectedNumber, setNumber] = useState()

  const selectNumber = (numberSelector) => {
    setNumber(numberSelector)
  }

  return (
    <>
      <div className = "input">
        <Button className = "input-button" text={"1"} fn={selectNumber} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"2"} fn={selectNumber} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"3"} fn={selectNumber} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"4"} fn={selectNumber} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"5"} fn={selectNumber} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"6"} fn={selectNumber} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"7"} fn={selectNumber} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"8"} fn={selectNumber} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"9"} fn={selectNumber} selectedNumber = {selectedNumber}/>
      </div>
    </>
  );

}

export default Input;