// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
//
// Given a string, find out if it satisfies the IPv4 address naming rules.
//
// Example
//
// For inputString = "172.16.254.1", the output should be
// isIPv4Address(inputString) = true;
//
// For inputString = "172.316.254.1", the output should be
// isIPv4Address(inputString) = false.
//
// 316 is not in range [0, 255].
//
// For inputString = ".254.255.0", the output should be
// isIPv4Address(inputString) = false.
//
// There is no first number.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] string inputString
//
// A string consisting of digits, full stops and lowercase English letters.
//
// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 30.
//
// [output] boolean
//
// true if inputString satisfies the IPv4 address naming rules, false otherwise.

function isIPv4Address(inputString) {
    let numArray = inputString.split('.')
    return numArray.length !== 4 ? false : numArray.every(
        x =>    x >= 0 &&
                x <= 255 &&
                x.length > 0 &&
                (x.length > 1 && x.startsWith('0') ? false : true)
    )
}

// Most voted solutions:
function isIPv4Address(s) {
  var  r=s.split(".")
  return r.length===4&&r.every(x=>x!=""&&!isNaN(x)&&x>=0&&x<256)
}

const isIPv4Address = inputString =>
  /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(?!$)|$)){4}$/.test(inputString);

// I am not sure how the most voted solution handles '01' and '00' - the !isNaN shows that condition to be true when for the IPv4 rules state it should not work. Otherwise not that different than my solution! My head hurts looking at that second one with the regex, and I am not there yet to try and work through that. But it is definitely one I want to progress on in short order.
