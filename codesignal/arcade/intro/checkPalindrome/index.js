// Given the string, check if it is a palindrome.
//
// Example
//
// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] string inputString
//
// A non-empty string consisting of lowercase characters.
//
// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 105.
//
// [output] boolean
//
// true if inputString is a palindrome, false otherwise.

function checkPalindrome(inputString) {
    let reverseString = inputString.split('').reverse().join('');
    let midPoint = Math.round(inputString.length/2);
    if (inputString.length === 1) {
        return true;
    } else if (inputString.length % 2 === 0) {
        return reverseString === inputString? true : false;
    } else {
        let stringArray = [];
        let reverseArray = [];
        for (let i = 0; i < midPoint - 1; i++) {
            stringArray.push(inputString[i])
            reverseArray.push(inputString[inputString.length-i-1])
        }
        return stringArray.join('') === reverseArray.join('')? true : false;
    }
}


// Most voted solutions:
function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
}

function checkPalindrome(inputString) {
    return [...inputString].reverse().join('') === inputString
}


// !!! used so many steps when I had the solution to start. Made problem really complicated by splitting the string in half, and reversing the second half. Also a good reminder regarding spread syntax. Read MDN documentation.
