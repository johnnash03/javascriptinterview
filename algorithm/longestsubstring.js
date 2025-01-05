// Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function (s) {
  let start = 0,
    end = 0,
    ob = {}, // What should be the value
    currRepeating, // Which character is repeated.
    maxStart,
    maxLen = -Infinity;

  while (end < s.length) {
    // Two cases here
    // Curr char s[end] exists in object or does not.

    if (s[end] in ob) {
      currRepeating = s[end];
      // this string is repeating
    } else {
      ob[s[end]] = true;
    }
    while (currRepeating !== "") {
      // && start < end is required?
      // if (s[])
    }
  }
};
