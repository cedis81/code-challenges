// You are given a two-digit integer n. Return the sum of its digits.
//
// Example
//
// For n = 29, the output should be
// addTwoDigits(n) = 11.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] integer n
//
// A positive two-digit integer.
//
// Guaranteed constraints:
// 10 ≤ n ≤ 99.
//
// [output] integer
//
// The sum of the first and second digits of the input number.

function addTwoDigits(n) {
    return n.toString().split('').map(x=>parseInt(x,10)).reduce((acc,cur) => acc + cur)
}

// Most voted solutions:
function addTwoDigits(n) {
    return n%10 + Math.floor(n/10)
}

function addTwoDigits(n) {
    return (n / 10 | 0) + n % 10;
}

// so much simpler! habit is to always convert things to arrays and work off that. Was not needed in this case. Will try to solve future iterations without defaulting to arrays first. But used reduce again, which was good.
