import createTableData from "./createTableData"

export default function buildTableArray(teams, results){
  let tableRawData = createTableData(teams, results)
  let tableDataArray = []
  let temporaryArray = []
  let pointsFilter = [] 

  // SORT IN POINTS ORDER
  tableRawData.sort((a, b) => b.points - a.points )

  // NOW SORT BY GOAL DIFFERENCE TOO
  while(tableRawData.length){
    pointsFilter = tableRawData[0].points
    temporaryArray = tableRawData.filter(team => team.points === pointsFilter)
    tableRawData = tableRawData.filter(team => team.points !== pointsFilter)
    temporaryArray.sort((a, b) => b.goalDifference - a.goalDifference)
    tableDataArray = [...tableDataArray, ...temporaryArray]
  }  

  return tableDataArray
}

