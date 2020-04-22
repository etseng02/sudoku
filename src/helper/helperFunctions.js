


const checkRow = (rowNumber, blockNumber, dataModel) => {
//within its own block it should check all the values of either the top, middle or bottom row


  let possibleNumbers = []

  if (blockNumber === 1 || blockNumber === 2 || blockNumber === 3) {
    possibleNumbers = dataModel.block1[rowNumber].concat(dataModel.block2[rowNumber]).concat(dataModel.block3[rowNumber])
    possibleNumbers = possibleNumbers.filter(function(val) { return val !== null; }).join(", ")
  } else if (blockNumber === 4 || blockNumber === 5 || blockNumber === 6) {
    possibleNumbers = dataModel.block4[rowNumber].concat(dataModel.block5[rowNumber]).concat(dataModel.block6[rowNumber])
    possibleNumbers = possibleNumbers.filter(function(val) { return val !== null; }).join(", ")
  } else if (blockNumber === 7 || blockNumber === 8 || blockNumber === 9) {
    possibleNumbers = dataModel.block7[rowNumber].concat(dataModel.block8[rowNumber]).concat(dataModel.block9[rowNumber])
    possibleNumbers = possibleNumbers.filter(function(val) { return val !== null; }).join(", ")
  }

  console.log("POSSIBLE ROW NUMBERS " + possibleNumbers)

}

const checkColumn = () => {
  let possibleNumbers = []

  


}


const solveSudoku = (state) => {
  console.log("yes")

  let dataModel = state

  //Iterate over every block
  for (let blockNumber = 1; blockNumber <= 9; blockNumber++) {

    let currentBlock = dataModel["block"+ blockNumber]

    console.log(currentBlock)

    //iterate over each square in every block

    for (let row = 0; row <= 2; row++) {
      for (let number = 0; number <= 2; number++) {

        if (currentBlock[row][number] === null) {
        //  console.log(blockNumber + " " + row + " " + number + " is null")
          checkRow(row, blockNumber, dataModel)
          checkColumn(number, blockNumber, dataModel)
        }

    
      }
    }

  }


};









export default solveSudoku;