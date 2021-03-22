// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
//
// Example
//
// For
//
// picture = ["abc",
//            "ded"]
// the output should be
//
// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.string picture
//
// A non-empty array of non-empty equal-length strings.
//
// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
// 1 ≤ picture[i].length ≤ 100.
//
// [output] array.string
//
// The same matrix of characters, framed with a border of asterisks of width 1.

function addBorder(picture) {
    let astLength = picture[0].length + 2
    return [
        '*'.repeat(astLength),
        ...picture.map(char => `*${char}*`),
        '*'.repeat(astLength)
    ]
}


// Most voted solutions:
function addBorder(picture) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}

addBorder = p => [(t = p[0].replace(/./g, '*')+'**'), ...p.map(v => `*${v}*`), t]


// I initially used push and unshift. Spread syntax was easy to implement here, and I'm getting the hang of it slowly.
