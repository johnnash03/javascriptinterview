/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringGeneration = function (s) {
  /* 
    I need to maintain a maximum non-repeating length variable, initialized with what(maxLen = 0)
    I need to maintain left and right pointer: where left denotes the start of the string and right denotes the end of string.
    @Question: Terminal conditions for the pointer
    @Question: Should both the pointers start with 0.
     
    What should I initialize these pointers with(l=0, r=0)

    An object/hashmap to maintain the frequency in the current substring.
    
    @Question: 
  */

  let maxLen = 0;
  let l = 0,
    r = 0;
  let freqOb = {};
  console.log("s.length", s.length);
  while (l <= r && r < s.length) {
    // Keep extending the right window until we encounter an already existing character in current substring.
    // @Question: Here, l = r+1 might cause overflow. How to deal?
    // To start incrementing the window to the right, we will use the following while loop
  }
};

var lengthOfLongestSubstring = function (s) {
  // Maintain a Set

  let l = 0;
  const currentCharSet = new Set();
  let maxLen = 0;
  for (let r = 0; r < s.length; r++) {
    while (currentCharSet.has(s[r])) {
      // Question
      currentCharSet.delete(s[l]);
      l++;
    }

    currentCharSet.add(s[r]);
    let currLen = r - l + 1;
    if (currLen > maxLen) maxLen = currLen;
  }
  console.log("maxLen", maxLen);
};
lengthOfLongestSubstring("abcabcbb");
