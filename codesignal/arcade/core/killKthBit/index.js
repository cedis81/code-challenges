// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.
//
// You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.
//
// Example
//
// For n = 37 and k = 3, the output should be
// killKthBit(n, k) = 33.
//
// 3710 = 1001012 ~> 1000012 = 3310.
//
// For n = 37 and k = 4, the output should be
// killKthBit(n, k) = 37.
//
// The 4th bit is 0 already (looks like the Mad Coder forgot to encrypt this number), so the answer is still 37.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] integer n
//
// Guaranteed constraints:
// 0 ≤ n ≤ 231 - 1.
//
// [input] integer k
//
// The 1-based index of the changed bit (counting from the right).
//
// Guaranteed constraints:
// 1 ≤ k ≤ 31.
//
// [output] integer

function killKthBit(n, k) {
  return (n >> (k - 1)) % 2 === 0 ? n : n - (1 << (k-1));
}

// Most voted solutions:
function killKthBit(n, k) {
  return n & ~(1 << k - 1);
}

// This one was tough, dealing with bits is not something that feels intuitive to me at all. I leaned heavily into the n = 37 and k = 3 example pretty hard. My thought process was to shift it over to the kth bit, and determine if that was 1 or 0 by checking if it was odd or even. If it were odd, then I needed to change that from a 1 to a 0, which I did by subtracting it to change the kth bit.

// I like the most voted solution, and after checking the MDN documentation, it makes sense. And, it follows the actual description much better. Coerce the kth bit to 1, then invert it, and use bitwise AND to set it to zero regardless of its value. These challenges, I can usually make sense of these other solutions, but I am not always using some of these patterns consistently. I am going to keep doing these and try to hammer them home more.
