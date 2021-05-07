// You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.
//
// Example
//
// For a = 2 and b = 7, the output should be
// rangeBitCount(a, b) = 11.
//
// Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] integer a
//
// Guaranteed constraints:
// 0 ≤ a ≤ b.
//
// [input] integer b
//
// Guaranteed constraints:
// a ≤ b ≤ 10.
//
// [output] integer

function rangeBitCount(a, b) {
// convert a, b to an array
// convert each number to Binary
// convert count all the 1s
// reduce

let numArray = [];
for (let i = a; i <= b; i++) {
    numArray.push(i)
}
return numArray.map(x=> x.toString(2).split('').reduce((acc, cur) => parseInt(acc) + parseInt(cur))).reduce((acc, cur) => parseInt(acc) + parseInt(cur))

}

// Most voted solutions:
function rangeBitCount(a, b) {
    var packed = "";
    while(a <= b){
        packed += a.toString(2);
        a++;
    }
    return packed.split('1').length-1;
}

// I was working on other projects and not coding challenges the last few days, so I wanted to ease into this one and just do the first thing in my mind, instead of trying to optimize or super strategize. I simply read the problem, and pseudo-coded. I just went step by step, with the console and everything I tried, it worked right away and I finished in 5 minutes, which was not expected. I know I'm iterating over things very frequently, like I said, I just went with my pseudo-code to follow the literal instructions from the description. Throughout these challenges, I will probably be mixing in this technique to remind myself hey you can do the simple, and other times I'll try and optimize more. Like in this other solution, you didn't even have to create an original array, but you can just mush it all into a string, and count the occurrences of 1 by creating an array and using length.
