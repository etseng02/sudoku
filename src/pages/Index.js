import React, { useState } from 'react';
import '../styles/index.scss'

import SquareBlock from '../components/SquareBlock.js'
import Button from '../components/Button'
import Input from '../components/Input'
import {checkRow, checkColumn, checkWithinBlock} from '../helper/helperFunctions'
import {clearData, dataSet1, dataSet2} from '../helper/dataSets'


const Index = () => {

  const [state, setState] = useState({
    block1: [[null, null, null],[null, null, null],[null, null, null]],
    block2: [[null, null, null],[null, null, null],[null, null, null]],
    block3: [[null, null, null],[null, null, null],[null, null, null]],
    block4: [[null, null, null],[null, null, null],[null, null, null]],
    block5: [[null, null, null],[null, null, null],[null, null, null]],
    block6: [[null, null, null],[null, null, null],[null, null, null]],
    block7: [[null, null, null],[null, null, null],[null, null, null]],
    block8: [[null, null, null],[null, null, null],[null, null, null]],
    block9: [[null, null, null],[null, null, null],[null, null, null]],
    selectedSquare: [null, null]
  });

  const numbersList = [1,2,3,4,5,6,7,8,9];

  const solveSudoku = (state) => {

    setState(prevState => ({...prevState, selectedSquare: [null,null]}));

    let stopFunction = false;

    let newBlockState = JSON.parse(JSON.stringify(state));
    
    while (stopFunction === false) {
      
      let numbersChanged = false

      //Iterate over every block (9 Squares)
      for (let blockNumber = 1; blockNumber <= 9; blockNumber++) {
    
        //Each block has 3 rows, Iterate over each row
        for (let row = 0; row <= 2; row++) {

          //Each row has 3 numbers, iterate over each number
          for (let number = 0; number <= 2; number++) {

            if (newBlockState["block"+ blockNumber][row][number] === null) {
              
              let eliminatedNumbers = []
                .concat(checkRow(row, blockNumber, newBlockState))
                .concat(checkColumn(number, blockNumber, newBlockState))
                .concat(checkWithinBlock(blockNumber, newBlockState));
    
              let possibleNumbers = numbersList.filter((staticNumber) => !eliminatedNumbers.includes(staticNumber));
    
              if (possibleNumbers.length === 1) {

                numbersChanged = true;
                
                newBlockState["block"+blockNumber][row][number] = possibleNumbers[0];

                setState(prevState => ({
                  ...prevState, ["block"+blockNumber]: newBlockState["block"+blockNumber]
                }));
              }
            }
          }
        }

      }// end of block loop

      if (numbersChanged === false) {
        stopFunction = true;
      } 

    }//end of while loop 
  };

  const selectSquare = (blockid, number) => {
    if (blockid === state.selectedSquare[0] && number === state.selectedSquare[1]){
      setState({...state, selectedSquare: [null, null]});
    } else {
      setState({...state, selectedSquare: [blockid, number]});
    }
  }

  const insertNumber = (selectedNumber) => {
    if (state.selectedSquare[0] !== null && state.selectedSquare[1] !== null) {
      let row = Math.floor((state.selectedSquare[1]-1)/3)
      let rowPosition = (state.selectedSquare[1]-(row*3))-1
      let newBlock = state["block"+state.selectedSquare[0]]
      newBlock[row][rowPosition] = selectedNumber
      setState(prevState => ({...prevState, ["block"+state.selectedSquare[0]]: newBlock}));
    }
  }

  const setData = (data) => {
    let newData = JSON.parse(JSON.stringify(data));
    setState(newData);
  }

  return (
    <>
      <div className = "square-grid">
        <SquareBlock blockid={1} data={state.block1} fn={selectSquare} selectedSquare={state.selectedSquare}/>
        <SquareBlock blockid={2} data={state.block2} fn={selectSquare} selectedSquare={state.selectedSquare}/>
        <SquareBlock blockid={3} data={state.block3} fn={selectSquare} selectedSquare={state.selectedSquare}/>
        <SquareBlock blockid={4} data={state.block4} fn={selectSquare} selectedSquare={state.selectedSquare}/>
        <SquareBlock blockid={5} data={state.block5} fn={selectSquare} selectedSquare={state.selectedSquare}/>
        <SquareBlock blockid={6} data={state.block6} fn={selectSquare} selectedSquare={state.selectedSquare}/>
        <SquareBlock blockid={7} data={state.block7} fn={selectSquare} selectedSquare={state.selectedSquare}/>
        <SquareBlock blockid={8} data={state.block8} fn={selectSquare} selectedSquare={state.selectedSquare}/>
        <SquareBlock blockid={9} data={state.block9} fn={selectSquare} selectedSquare={state.selectedSquare}/>
        <Button text={"Clear Board"} data={clearData} fn={setData}/>
        <Button text={"Demo 1"} data={dataSet1} fn={setData}/>
        <Button text={"Demo 2"} data={dataSet2} fn={setData}/>
      </div>



      <Input insertNumber={insertNumber} />

      <Button text={"Start"} fn={solveSudoku} numbers={state}/>

    </>
  );
}
export default Index;
