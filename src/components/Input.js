import React from 'react';
import Button from './Button.js'
import '../styles/input.scss'

const Input = ({selectNumberValue, selectedNumber}) => {

  return (
    <>
      <div className = "input">
        <Button className = "input-button" text={"1"} fn={selectNumberValue} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"2"} fn={selectNumberValue} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"3"} fn={selectNumberValue} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"4"} fn={selectNumberValue} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"5"} fn={selectNumberValue} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"6"} fn={selectNumberValue} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"7"} fn={selectNumberValue} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"8"} fn={selectNumberValue} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={"9"} fn={selectNumberValue} selectedNumber = {selectedNumber}/>
        <Button className = "input-button" text={" "} fn={selectNumberValue} selectedNumber = {selectedNumber}/>
      </div>
    </>
  );

}

export default Input;