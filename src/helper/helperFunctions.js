


const checkRow = (rowNumber, blockNumber, dataModel) => {
//within its own block it should check all the values of either the top, middle or bottom row

  let blocks = []
  let possibleNumbers = []

  if (blockNumber === 1 || blockNumber === 2 || blockNumber === 3) {
    blocks = [1,2,3]
  } else if (blockNumber === 4 || blockNumber === 5 || blockNumber === 6) {
    blocks = [4,5,6]
  } else if (blockNumber === 7 || blockNumber === 8 || blockNumber === 9) {
    blocks = [7,8,9]
  }

  blocks.forEach((block)=>{
      possibleNumbers = possibleNumbers.concat(dataModel["block"+block][rowNumber])
  })

  possibleNumbers = possibleNumbers.filter(function(val) { return val !== null; }).join(", ")

  console.log("POSSIBLE ROW NUMBERS " + possibleNumbers)
  return possibleNumbers

}

const checkColumn = (columnNumber, blockNumber, dataModel) => {
  let possibleNumbers = []
  let blocks = []

  if (blockNumber === 1 || blockNumber === 4 || blockNumber === 7) {
    blocks = [1,4,7]
  } else if (blockNumber === 2 || blockNumber === 5 || blockNumber === 8) {
    blocks = [2,5,8]
  } else if (blockNumber === 3 || blockNumber === 6 || blockNumber === 9) {
    blocks = [3,6,9]
  }

    blocks.forEach((block)=>{
      for (let rowIteration = 0; rowIteration <= 2; rowIteration++){
        possibleNumbers.push(dataModel["block"+block][rowIteration][columnNumber])
      }
    })

    possibleNumbers = possibleNumbers.filter(function(val) { return val !== null; }).join(", ")
    console.log("POSSIBLE COLUMN NUMBERS " + possibleNumbers)
    return possibleNumbers
}

const checkWithinBlock = (blockNumber, dataModel) => {
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
          checkWithinBlock(blockNumber, dataModel)
        }

    
      }
    }

  }


};









export default solveSudoku;