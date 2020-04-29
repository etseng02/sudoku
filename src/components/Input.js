import React from 'react';
import Button from './Button.js'
import '../styles/input.scss'

const Input = ({insertNumber}) => {

  return (
    <>
      <div className = "input">
        <Button className = "input-button" text={"1"} fn={insertNumber} />
        <Button className = "input-button" text={"2"} fn={insertNumber} />
        <Button className = "input-button" text={"3"} fn={insertNumber} />
        <Button className = "input-button" text={"4"} fn={insertNumber} />
        <Button className = "input-button" text={"5"} fn={insertNumber} />
        <Button className = "input-button" text={"6"} fn={insertNumber} />
        <Button className = "input-button" text={"7"} fn={insertNumber} />
        <Button className = "input-button" text={"8"} fn={insertNumber} />
        <Button className = "input-button" text={"9"} fn={insertNumber} />
        <Button className = "input-button" text={" "} fn={insertNumber} />
      </div>
    </>
  );

}

export default Input;