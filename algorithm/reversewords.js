/* 
  Solution 1
*/

function reverseWord(word) {
  let reverseWord = "";
  for (i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}
var reverseWords = function (s) {
  let start = 0,
    end = 0;
  let result = "";
  let str = reverseWord(s);
  while (end < str.length) {
    while (str[start] === " ") {
      start++;
    }

    //
    end = start;
    while (str[end] !== " " && end < str.length) {
      end++;
    }
    result = result + " " + reverseWord(str.substring(start, end));

    start = end;
  }
  return result.trim();
};

/* 
  Solution 2
*/
function reverseWords(s) {
  let i = 0,
    j = 0;
  let reversedInput = reverseStr(s);

  const len = reversedInput.length;
  let finalStr = "";
  while (i < len) {
    while (i < j || (i < len && reversedInput[i] === " ")) i++;
    while (j < i || (j < len && reversedInput[j] !== " ")) j++;
    console.log(i, j - 1);
    // c;
    finalStr += reverseStr(reversedInput.substring(i, j)) + " ";
  }
  return finalStr.trim();
}

function reverseStr(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
