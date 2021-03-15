// Write a function that reverses characters in (possibly nested) parentheses in the input string.
//
// Input strings will always be well-formed with matching ()s.
//
// Example
//
// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] string inputString
//
// A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.
//
// Guaranteed constraints:
// 0 ≤ inputString.length ≤ 50.
//
// [output] string
//
// Return inputString, with all the characters that were in parentheses reversed.

function reverseInParentheses(inputString) {
    let result = inputString
    while (true) {
        let endParen = result.indexOf(')')
        let openParen = result.substring(0, endParen).lastIndexOf('(')
        if (endParen === -1) {
            break
        }
        let wordInParens = result.slice(openParen+1, endParen)
        result = result.replace(`(${wordInParens})`, wordInParens.split('').reverse().join(''))
    }
    return result
}

// Most voted solutions:
function reverseInParentheses(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}

function reverseInParentheses(s) {
    while (true) {
        let c = s.indexOf(")");

        if (c === -1) {
            break;
        }

        let o = s.substring(0, c).lastIndexOf("(");

        let start = s.substring(0, o);
        let middle = s.substring(o + 1, c).split("").reverse().join("");
        let end = s.substring(c + 1, s.length);

        s = start + middle + end;
    }

    return s;
}

// This one was difficult. I ended up looking at the solutions, then came back a week later to try and solve it after some time removed from the task. It was challenging and frustrating, but I am glad I was able to work through it. My first iteration, I tried to use regex and was able to return the string in parentheses, but struggled after that. Regex is high on my list of things to work on, as is ... syntax. Gotta keep on truckin'
