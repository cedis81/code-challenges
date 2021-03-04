// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
//
// Given a ticket number n, determine if it's lucky or not.
//
// Example
//
// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] integer n
//
// A ticket number represented as a positive integer with an even number of digits.
//
// Guaranteed constraints:
// 10 ≤ n < 106.
//
// [output] boolean
//
// true if n is a lucky ticket number, false otherwise.

function isLucky(n) {
    const halfDigits = n.toString().length/2
    const intArray = n.toString().split('').map(x => parseInt(x,10))
    const firstHalf = intArray.slice(0,halfDigits).reduce((acc, cur) => acc + cur,0);
    const secondHalf = intArray.slice(halfDigits).reduce((acc, cur) => acc + cur,0);
    return firstHalf === secondHalf
}

// Most voted solutions:
function isLucky(n) {
    var count = 0;
    n = String(n).split('').map(t => {return parseInt(t)});
    n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}


function isLucky(n) {
  var a=(n+"").split(""),half=a.length/2,l=0,r=0
  while(a.length>half) r+= +a.pop()
  while(a.length) l+= +a.pop()
  return l===r
}

// I like these solutions too!
