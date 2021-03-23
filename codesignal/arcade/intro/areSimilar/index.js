// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
//
// Given two arrays a and b, check whether they are similar.
//
// Example
//
// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.
//
// The arrays are equal, no need to swap any elements.
//
// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.
//
// We can obtain b from a by swapping 2 and 1 in b.
//
// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.
//
// Any swap of any two elements either in a or in b won't make a and b equal.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.integer a
//
// Array of integers.
//
// Guaranteed constraints:
// 3 ≤ a.length ≤ 105,
// 1 ≤ a[i] ≤ 1000.
//
// [input] array.integer b
//
// Array of integers of the same length as a.
//
// Guaranteed constraints:
// b.length = a.length,
// 1 ≤ b[i] ≤ 1000.
//
// [output] boolean
//
// true if a and b are similar, false otherwise.

function areSimilar(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) !== i) {
            b[b.indexOf(a[i])] = b[i]
            b[i] = a[i]
            break
        }
    }
     return JSON.stringify(a) === JSON.stringify(b) ? true : false
}

// Most voted solutions:
function areSimilar(a, b) {
    const ad = a.filter((v,i)=>v!=b[i])
    const bd = b.filter((v,i)=>v!=a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}

// I failed this challenge. My solution passed all 10 of the initial tests, but only 18/20 of tests upon submission. I did not have enough points to unlock the hidden tests. My thought process here was to do a for loop to find the first element of array b that did not match array a, and swap the elements. I then broke the for loop, because a second swap should return false. The most voted solution makes sense - filtering out any elements at the same index in both arrays that didn't match. If the new array was zero - the two arrays already matched. If the length of the array was greater than 2, that meant more than 2 elements didn't match and that would return false. Then, if only two, if they were swapped and matched, it'd return true. Frustrated that I couldn't see which tests this failed.
