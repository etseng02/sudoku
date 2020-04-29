import React, { useState } from 'react';
import '../styles/index.scss'

import SquareBlock from '../components/SquareBlock.js'
import Button from '../components/Button'
import Input from '../components/Input'
import {checkRow, checkColumn, checkWithinBlock} from '../helper/helperFunctions'


const Index = () => {

  const [state, setState] = useState({
    block1: [[8, null, 1],[2, 5, null],[null, 4, null]],
    block2: [[null, null, null],[null, 7, null],[null, null, 8]],
    block3: [[null, null, null],[null, 9, null],[null, 2, 6]],
    block4: [[null, null, 7],[null, null, 5],[null, null, 3]],
    block5: [[8, null, 5],[null, 4, 3],[7, 9, null]],
    block6: [[null, 1, 3],[null, null, 7],[null, null, 4]],
    block7: [[null, 9, null],[1, null, null],[null, 6, 4]],
    block8: [[4, null, 7],[5, 8, 6],[null, 1, 2]],
    block9: [[null, 6, 2],[null, 7, 9],[null, null, null]],
    selectedSquare: [null, null]
  });

  const solveSudoku = (state) => {

    setState(prevState => ({...prevState, selectedSquare: [null,null]}));
  
    const numbersList = [1,2,3,4,5,6,7,8,9];
  
    let dataModel = Object.assign({},state);

    let stopFunction = false;

    while (stopFunction === false) {

      let numbersChanged = false

      //Iterate over every block (9 Squares)
      for (let blockNumber = 1; blockNumber <= 9; blockNumber++) {
    
        //Each block has 3 rows, Iterate over each row
        for (let row = 0; row <= 2; row++) {

          //Each row has 3 numbers, iterate over each number
          for (let number = 0; number <= 2; number++) {

            if (dataModel["block"+ blockNumber][row][number] === null) {
              
              let eliminatedNumbers = []
                .concat(checkRow(row, blockNumber, dataModel))
                .concat(checkColumn(number, blockNumber, dataModel))
                .concat(checkWithinBlock(blockNumber, dataModel));
    
              let possibleNumbers = numbersList.filter((staticNumber) => !eliminatedNumbers.includes(staticNumber));
    
              if (possibleNumbers.length === 1) {

                numbersChanged = true;

                let new_block_state = Object.assign({},[dataModel["block"+ blockNumber]]);

                new_block_state[0][row][number] = possibleNumbers[0];

                setState(prevState => ({
                  ...prevState,
                  ["block"+ blockNumber]: [...state["block"+blockNumber], new_block_state ]
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
      console.log("Unselected")
    } else {
      setState({...state, selectedSquare: [blockid, number]});
      console.log(`BLOCK${blockid}, number was selected ${state.selectedSquare[1]}`);
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
      </div>

      <Input insertNumber={insertNumber} />

      <Button text={"Start"} fn={solveSudoku} numbers={state}/>

    </>
  );
}
export default Index;
