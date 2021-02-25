// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
//
// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
//
// Example
//
// For
//
// matrix = [[0, 1, 1, 2],
//           [0, 5, 0, 0],
//           [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9.
//
// example 1
//
// There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.
//
// For
//
// matrix = [[1, 1, 1, 0],
//           [0, 5, 0, 1],
//           [2, 1, 3, 10]]
// the output should be
// matrixElementsSum(matrix) = 9.
//
// example 2
//
// Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.array.integer matrix
//
// A 2-dimensional array of integers representing the cost of each room in the building. A value of 0 indicates that the room is haunted.
//
// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 5,
// 1 ≤ matrix[i].length ≤ 5,
// 0 ≤ matrix[i][j] ≤ 10.
//
// [output] integer
//
// The total price of all the rooms that are suitable for the CodeBots to live in.

function matrixElementsSum(matrix) {
    let sumRooms = 0;
    let freeRooms = [1, 1, 1, 1, 1];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0 ) {
                freeRooms[j] = 0
            } else {
                sumRooms += (matrix[i][j] * freeRooms[j]);
            }
        }
    }
    return sumRooms;
}


// Most voted solutions:
function matrixElementsSum(matrix) {
  for(var r=0,j=0;j<matrix[0].length;j++){
      for(var i=0;i<matrix.length;i++){
        if(matrix[i][j]===0) break
        else r+=matrix[i][j]
      }
  }
  return r
}

function matrixElementsSum(matrix) {
    var total = 0;

    // Navigate each column of rooms
    // i = current column, j = current floor in column
    for (var i = 0; i < matrix[0].length; i++) {

        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                // This room is haunted, so we don't care about the rooms below it.
                // Continue to the next column of rooms
                break;
            }
            total += matrix[j][i];
        }

    }

    return total;
}


// Did not think to go by column first, then break the for column loop to ignore the rest completely. Have not had much experience with break besides the first time I learned switch - just read MDN documentation. Good to know!
