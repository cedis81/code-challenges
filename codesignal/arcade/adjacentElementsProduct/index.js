// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//
// Example
//
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.
//
// 7 and 3 produce the largest product.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.integer inputArray
//
// An array of integers containing at least two elements.
//
// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.
//
// [output] integer
//
// The largest product of adjacent elements.

function adjacentElementsProduct(inputArray) {
    let largest = inputArray[0] * inputArray[1];
    inputArray.reduce(function(acc, cur, i) {
        if (acc * cur > largest) {
            largest = acc * cur
        }
        return cur
    })
    return largest
}


// Most voted solutions:
function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}


function adjacentElementsProduct(inputArray) {
    var prod = inputArray[0] * inputArray[1];

    for (var i = 1; i<inputArray.length - 1;i++) {
        prod = Math.max(prod, inputArray[i] * inputArray[i+1]);
    }

    return prod
}



// Math.max! Finding a lot of these use these methods, which is a good habit. Will try to incorporate that more going forward. I wanted practice using reduce. Happy with how it turned out.
