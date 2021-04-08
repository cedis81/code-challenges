// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
//
// Example
//
// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.integer inputArray
//
// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// -105 ≤ inputArray[i] ≤ 105.
//
// [output] integer
//
// The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
// It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

function arrayChange(inputArray) {
    let count = 0
    inputArray.reduce(
        (acc, cur, i) => {
            if (acc >= cur) {
                count += (acc + 1 - cur)
                return acc + 1
            } else {
                return cur
            }
        }
    )
    return count
    // 1) traverse array
    // 2) compare two values
    // 3) which value is higher?
    // 4) if higher value is second num, count the difference between two nums and add
    // 5) return higher value
    // 6) at end of array, return count
}

// Most voted solutions:
function arrayChange(series) {
    var moves = 0;

    for (var i = 1; i < series.length; i++) {
        if (series[i] <= series[i - 1]) {
            diff = series[i - 1] - series[i] + 1;
            series[i] += diff;
            moves += diff;
        }
    }

    return moves;
}

function arrayChange(inputArray) {
    return inputArray.reduce(function(x,b,i,a){
        while(b>=a[i+1]){x++;a[i+1]++;};
        return x;
    },0)
}

// This one was really, really frustrating. Part of the issue was I forced myself to use reduce. I did so many iterations of my actual solution, and none of them would do what I wanted to do. I took a break, came back and my other idea sounded good in my head, but it wasn't in practice. I got up and took another break, then decided to take a step back, breathe, and pseudo-code it, and I decided to leave my pseudo-code in there. I deleted what I had, and started over, and it worked on the first try after this. I was stunned, and really annoyed. In all my iterations prior to this, it seemed like they were so close, and I can't even remember how this one differed. I'm glad I got it to work, I'm glad I used reduce, and I'm glad I re-introduced the idea of pseudo-code into my toolbox. I know when interviewing, this will be an important step and I had not used it in a really long time. Again, as frustrating as this was, there was a lot of good that came out of it.

// The other solutions - the first one didn't look that different than mine, just using a for loop to traverse the array. The second was a nice use of reduce - basically using the accumulator as, exactly that, an accumulator and making the lesser array element also increment along with the accumulator until it reached the step it needed. 
