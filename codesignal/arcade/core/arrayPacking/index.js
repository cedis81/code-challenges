// You are given an array of up to four non-negative integers, each less than 256.
//
// Your task is to pack these integers into one number M in the following way:
//
// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.
// Return the obtained integer M.
//
// Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.
//
// Example
//
// For a = [24, 85, 0], the output should be
// arrayPacking(a) = 21784.
//
// An array [24, 85, 0] looks like [00011000, 01010101, 00000000] in binary.
// After packing these into one number we get 00000000 01010101 00011000 (spaces are placed for convenience), which equals to 21784.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.integer a
//
// Guaranteed constraints:
// 1 ≤ a.length ≤ 4,
// 0 ≤ a[i] < 256.
//
// [output] integer

function arrayPacking(a) {
    return (parseInt(a.reverse().
        map(x => {
            let binString = x.toString(2);
            return binString.length === 8 ?
                binString :
                '0'.repeat(8 - binString.length) + binString
        })
        .join(''),2)
    )
}


// Most voted solutions:
function arrayPacking(a) {
    return a.reduce((value, byte, i) => value + byte * Math.pow(256, i));
}

function arrayPacking(a) {
    ret = 0;
    for(i=0;i<a.length;i++)
        ret+= a[i] << 8*i;
    return ret;
}


// More bits. Again, I leaned heavily into the example pretty hard. I basically followed it to a T, by reversing the array values so that the first elements are on the right of the bits, then converting them to the binary string values, including the zeroes, then joining the strings in the array and converting that back to an integer.

// I was pretty proud of finishing it as quickly as I did, and I need to take a step back and not get disappointed when I see such concise code, with thinking out of the box solutions that I didn't come close to considering. This is still something new to me, and I was still able to complete it. I need to take the win there.

// First solution - reduce, cool! 256 and exponents was not something I was familiar with when it came to bits, so this is a cool thing to see, combined with reduce. Great thinking to just push the values 8 spots over to the left with each index.

// Second solution - similar thing, just using a loop and taking advantage of the index and pushing the values to the left each time. Hopefully the more I do these, the more I recognize the patterns earlier in my thought process.
