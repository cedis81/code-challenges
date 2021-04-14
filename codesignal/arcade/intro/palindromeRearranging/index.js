// Given a string, find out if its characters can be rearranged to form a palindrome.
//
// Example
//
// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.
//
// We can rearrange "aabb" to make "abba", which is a palindrome.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] string inputString
//
// A string consisting of lowercase English letters.
//
// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.
//
// [output] boolean
//
// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindromeRearranging(inputString) {
    let letterCount = {}
    let oddObjKeyCount = 0
    for (let i = 0; i < inputString.length; i++) {
        if (letterCount[inputString[i]]) {
            letterCount[inputString[i]]+= 1
        } else {
            letterCount[inputString[i]] = 1
        }
    }
    for (const key in letterCount) {
        if (oddObjKeyCount > 1) {
            return false
        } else if (letterCount[key] % 2 !== 0) {
            oddObjKeyCount++
        }
    }
    return oddObjKeyCount < 2 ? true : false

}


// Most voted solutions:
function palindromeRearranging(inputString) {
    return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2;
}

function palindromeRearranging(s) {
  var ss=s.split("").sort(),r=0
  while(ss.length){
    var t=ss.shift()
    if(t===ss[0]) ss.shift()
    else r++
  }
  return r<2
}

palindromeRearranging = s => {
    //histogram the characters
    m = []
    for(c of s)
        m[c] = -~m[c]
    //count the unmatched characters
    u = 0
    for(x in m)
        u += m[x]%2

    //confirm that the number of unmatched characters
    //is the same as the oddness of the string
    return u == s.length%2
}

// Palindromes. Feels like these come up frequently but this was the first time I saw it asked in this manner. My thought process was to get a count of each letter, and if more than one instance of a letter count being odd, meant it could not be rearranged into a palindrome. I created an empty object to house the letter counts, and a variable to count how many instances of odd counts there were. My first for loop populated the empty object. The second loop iterated through the object to count odds. I had not coded in a few days and just wanted to try working through my first thought process to see how it went. I was able to complete it pretty quickly, which was a nice way to get back into it, even if the solution was not elegant or concise.

// Looking at these solutions has made me realize something. I started this to document my growth as a developer, but also to learn other patterns and how others solve things. This has had an unintended, harmful effect on me. Looking at the third solution, with the tilde, and then going to the documentation made my head hurt. I understood the gist of it right away, but at the beginning of this coding repo, I would have simply added that to the list of 102357107501284012750127 items I felt I needed to brush up on to be an employable developer, like I had with bits, which I will also push to the side for the time being. Now, I will simply take the victory in understanding what they were trying to do, and how it worked (it was not a very different solution than mine). The second solution was pretty similar to mine, but was done with a single loop, and I like it. Convert the string to an array, sort it, and chop off the first character. For each consecutive character that is a duplicate, chop the second character off and keep going. If the character is not a duplicate, add to the count and keep going. If the count is greater than 1, then it's not a palindrome. The first solution, does include regex, and while that is something that is confusing for me similar to that third solution, that is something I do want to understand as I believe that's much more important to have a good grasp of even as a junior developer. The solution, again, is not that different than mine. Sort the characters in the string, remove the duplicates, and anything leftover more than 1 is again not a palindrome. I have some work to do with regex...
