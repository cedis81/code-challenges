// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
//
// Example
//
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.integer a
//
// If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.
//
// Guaranteed constraints:
// 1 ≤ a.length ≤ 1000,
// -1 ≤ a[i] ≤ 1000.
//
// [output] array.integer
//
// Sorted array a with all the trees untouched.

function sortByHeight(a) {
    let treesIndex = []
    a.forEach(function(el, i) {
        if (el === -1) {
            treesIndex.push(i)
        };
    })

    let sortedArray = a.sort((a,b) => a - b).slice(treesIndex.length)
    for(let i = 0; i < treesIndex.length; i++) {
        sortedArray.splice(treesIndex[i], 0, -1)
    }
    return sortedArray
}

// Most voted solutions:
function sortByHeight(a) {
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }

        return -1;
    })
}

// I'm finding I always want to take out information, store it, then put it back in somehow instead of simply working with what is already there. Nice use of shift, returning the value it removes from the array and mutating the array. 
