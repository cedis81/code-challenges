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

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (weight1 + weight2 <= maxW) {
        return value1 + value2
    } else if (weight1 <= maxW && weight2 <= maxW) {
        return value1 > value2 ? value1 : value2
    } else if (weight1 <= maxW) {
        return value1
    } else if (weight2 <= maxW) {
        return value2
    } else {
        return 0
    }
}


// Most voted solutions:
function knapsackLight(value1, weight1, value2, weight2, maxW) {
    return Math.max(
        maxW >= weight1 && value1,
        maxW >= weight2 && value2,
        maxW >= weight1 + weight2 && value1 + value2
    );
}

// So much simpler! I liked the thought put into it - there can only be four outcomes - value1, value2, both, or none. And just return the highest value of them all.
