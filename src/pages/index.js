import React, { Fragment, useState } from 'react';
import '../styles/index.scss'

import Square from '../components/Square.js'
import Button from '../components/Button'
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
  });

  const solveSudoku = (state) => {
  
    const numbersList = [1,2,3,4,5,6,7,8,9]
  
    let dataModel = Object.assign({},state);

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
    }
  };

  return (
    <Fragment>
    <div className = "square-grid">
            <Square data={state.block1}/>
            <Square data={state.block2}/>
            <Square data={state.block3}/>
            <Square data={state.block4}/>
            <Square data={state.block5}/>
            <Square data={state.block6}/>
            <Square data={state.block7}/>
            <Square data={state.block8}/>
            <Square data={state.block9}/>
    </div>

    <Button
      text={"Start"}
      solve={solveSudoku}
      numbers={state}
      update={useState}
      />

    </Fragment>
  );
}
export default Index;