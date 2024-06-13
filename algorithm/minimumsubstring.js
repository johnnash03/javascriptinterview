function minWindow(s, t) {
  const map = {};
  for (let ch of t) {
    map[ch] = (map[ch] || 0) + 1;
  }

  let start = 0,
    end = 0,
    minLen = Infinity,
    minLenStart = 0,
    counter = t.length;

  while (end < s.length) {
    if (map[s[end]] > 0) {
      counter--;
      // map[s[end]]--;
    }
    if (map[s[end]] !== undefined) {
      map[s[end]] = (map[s[end]] || 0) - 1;
    }
    end++;

    while (counter === 0) {
      // Why not +1 here.
      if (end - start < minLen) {
        minLen = end - start;
        minLenStart = start;
      }

      if (map[s[start]] === 0) {
        counter++;
      }
      if (map[s[start]] !== undefined) {
        map[s[start]]++;
      }
      console.log(start, end, counter, map);
      start++;
    }
  }
  console.log("start", start, minLenStart);
  return minLen === Infinity
    ? ""
    : s.substring(minLenStart, start + minLenStart);
}

// Example usage:
// console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("BNNNANAKB", "AB")); // Output: "BANC"
