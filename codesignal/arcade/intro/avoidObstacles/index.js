//
// Codewriting
//
// 300
//
// You are given an array of integers representing coordinates of obstacles situated on a straight line.
//
// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
//
// Find the minimal length of the jump enough to avoid all the obstacles.
//
// Example
//
// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.
//
// Check out the image below for better understanding:
//
//
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.integer inputArray
//
// Non-empty array of positive integers.
//
// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 1000,
// 1 ≤ inputArray[i] ≤ 1000.
//
// [output] integer
//
// The desired length.

function avoidObstacles(inputArray) {
    for (let i = 2; i <= 1001; i++) {
        if (inputArray.every(x => !(x % i === 0))) {
            return i
        }
    }
}

// Most voted solutions:
function avoidObstacles(arr) {
  for(var n=1;;n++) if(arr.every(x=>x%n)) return n
}


// This was a tough one for me. It'd been a while since I'd done a coding challenge, and I fell back into a habit of reading the problem as presented and trying to jump into the problem. i.e. seeing that the array needed to be sorted, then calculating the first jump, and looping and looping and looping. I took a break, got up and came back and tried thinking it through and looking at some of the tests. I'd realized that the elements couldn't be divisible by the jump length, so it simply became one loop and a test. I deleted everything, and did a for loop and it worked on the first try. I'm happy that my solution was basically the most voted solution, and that I'd done it so quickly and on the first try once I thought about it differently. This is certainly a nice bit of momentum to build off of.
