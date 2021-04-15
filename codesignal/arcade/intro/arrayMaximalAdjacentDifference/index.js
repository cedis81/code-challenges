// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
//
// Example
//
// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.integer inputArray
//
// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 10,
// -15 ≤ inputArray[i] ≤ 15.
//
// [output] integer
//
// The maximal absolute difference.

function arrayMaximalAdjacentDifference(inputArray) {
    return inputArray.reduce(
        (acc, cur, i, arr) => {
            let currentDiff = Math.abs(arr[i+1] - cur)
            return currentDiff > acc ? currentDiff : acc
        }
    , 0)
}

// Most voted solutions:
function arrayMaximalAdjacentDifference(arr) {
  return Math.max(...arr.slice(1).map((x,i)=>Math.abs(x-arr[i])))
}

function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = 0;

    for (let i = 1; i < inputArray.length; i++) {
        const currentDiff = Math.abs(inputArray[i - 1] - inputArray[i]);

        if (maxDiff < currentDiff) {
            maxDiff = currentDiff;
        }
    }

    return maxDiff;
}

// One habit I am trying to break in doing these code challenges is to do everything in as few lines as possible. Yes, I added an extra line by declaring and assigning currentDiff, but if I didn't, the code would not be DRY, and it would have been confusing when used in the ternary operator below it (a few of my other solutions have been this way and I don't like it). The second most voted solution was a good reminder of this and I am glad I looked at it.

// The description screamed reduce to me, and I am glad I used it and completed it pretty quickly. I referenced the arrayChange solution to use reduce in a similar way - to use the accumulator and assign the value if a newer one should be used, or keep the old value if the condition wasn't met. I'd previously only thought of accumulator as the accumulation of all that has happened, but that doesn't have to be the case.

// I like the most voted solution, and I am starting to recognize that this same person has many of the top 1-2 solutions in these problems. Instead of using reduce to traverse the array, he uses spread syntax and Math.max to simply return the biggest difference, instead of storing it in an accumulator like in reduce. I still need to do some more homework on spread syntax.
