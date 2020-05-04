const checkRow = (rowNumber, blockNumber, dataModel) => {

  let eliminatedNumbers = []
  let blocks = []


  if (blockNumber === 1 || blockNumber === 2 || blockNumber === 3) {
    blocks = [1,2,3]
  } else if (blockNumber === 4 || blockNumber === 5 || blockNumber === 6) {
    blocks = [4,5,6]
  } else if (blockNumber === 7 || blockNumber === 8 || blockNumber === 9) {
    blocks = [7,8,9]
  }

  blocks.forEach((block)=>{
    eliminatedNumbers = eliminatedNumbers.concat(dataModel["block"+block][rowNumber])
  })

  eliminatedNumbers = eliminatedNumbers.filter(function(val) { return val !== null; })
  return eliminatedNumbers

}

const checkColumn = (columnNumber, blockNumber, dataModel) => {
  let eliminatedNumbers = []
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
        eliminatedNumbers.push(dataModel["block"+block][rowIteration][columnNumber])
      }
    })

    eliminatedNumbers = eliminatedNumbers.filter(function(val) { return val !== null; });
    return eliminatedNumbers
}

const checkWithinBlock = (blockNumber, dataModel) => {
  let eliminatedNumbers = []
  let block = dataModel["block" + blockNumber]

  block.forEach((row)=>{
    eliminatedNumbers = eliminatedNumbers.concat(row)
  })

  eliminatedNumbers = eliminatedNumbers.filter(function(val) { return val !== null; });
  return eliminatedNumbers
}

export {checkRow, checkColumn, checkWithinBlock};