// Given an array of strings, return another array containing all of its longest strings.
//
// Example
//
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.string inputArray
//
// A non-empty array.
//
// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.
//
// [output] array.string
//
// Array of the longest strings, stored in the same order as in the inputArray.

function allLongestStrings(inputArray) {
  let inputObj = {}
  for(let i = 0; i < inputArray.length; i++) {
    let stringLength = inputArray[i].length
    let stringElement = inputArray[i]
    if(!inputObj[stringLength]) {
      inputObj[stringLength] = [stringElement]
    } else {
      inputObj[stringLength].push(stringElement)
    }
  }
  return inputObj[Object.keys(inputObj).sort((a,b) => b - a)[0]]
}

// wanted to try a different type of solution, with practice using object/key pairs

function allLongestStrings(inputArray) {
  let sortedArray = inputArray.sort((a,b) => b.length-a.length);
  let longestStringLength = sortedArray[0].length;
  let outputArray = []
  for (let i = 0; i < inputArray.length; i++) {
    if (sortedArray[i].length === longestStringLength) {
      outputArray.push(sortedArray[i])
    } else {
      break
    }
  }
  return outputArray
}

// Most voted solutions:
function allLongestStrings(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}


function allLongestStrings(inputArray) {
    return inputArray.filter(x => x.length === Math.max(...inputArray.map(x => x.length)));}


// Starting to recognize patterns. There are built in methods that both do same thing I'm trying to do, and can be used in different ways. i.e. creating a new array using sort array by string length, then taking the first element versus using Math.max on an array of string lengths. Or, creating an empty array, then pushing elements that meet condition versus using filter. Would like to continue getting more comfortable recognizing and using spread syntax.
