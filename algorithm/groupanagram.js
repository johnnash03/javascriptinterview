function groupAnagrams(words) {
  words = words.filter((n) => n);
  const ob = {};
  for (let word of words) {
    let sortedWord = word.split("").sort().join("");
    if (ob[sortedWord]) {
      ob[sortedWord].push(word);
    } else {
      ob[sortedWord] = [word];
    }
  }
  return Object.values(ob);
}
groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp", ,]);
