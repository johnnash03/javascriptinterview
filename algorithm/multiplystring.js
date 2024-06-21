// 328(a) * 92(b);

function multiplyString(a, b) {
  let totalSum = "0";
  for (let i = b.length - 1; i >= 0; i--) {
    let currTotalSum = "",
      currCarry = 0;
    for (let j = a.length - 1; j >= 0; j--) {
      let currSum = Number(a[j]) * Number(b[i]) + currCarry;
      currCarry = Math.floor(currSum / 10);
      currSumWithoutCarry = currSum % 10;
      // console.log(currSum + "-" + currCarry + "-" + currSumWithoutCarry);
      if (j == 0) {
        currTotalSum = String(currSum) + currTotalSum;
        // console.log("curr sum last", currSum);
      } else {
        currTotalSum = String(currSumWithoutCarry) + currTotalSum;
      }
      console.log(currTotalSum);
    }
    const currFactor = b.length - i - 1;
    let currSumFactored = currTotalSum;
    for (let k = 1; k <= currFactor; k++) {
      currSumFactored += "0";
    }
    totalSum = addString(totalSum, currSumFactored);
    console.log("total", currTotalSum, currFactor, currSumFactored, totalSum);

    // return;
  }
}

function addString(a, b) {
  let greater, smaller;
  if (a.length > b.length) {
    greater = a;
    smaller = b;
  } else {
    greater = b;
    smaller = a;
  }
  let smallerIndex = smaller.length - 1;
  let carry = 0;
  let sum = "";
  for (let i = greater.length - 1; i >= 0; i--) {
    let currSum, currCarry, currDigit;
    if (smallerIndex >= 0) {
      currSum = Number(greater[i]) + Number(smaller[smallerIndex]) + carry;
    } else {
      currSum = Number(greater[i]) + carry;
    }
    carry = Math.floor(currSum / 10);
    currDigit = currSum % 10;
    console.log(currSum, carry, currDigit);
    if (i === 0) {
      sum = String(currSum) + sum;
    } else {
      sum = String(currDigit) + sum;
    }
    smallerIndex--;
  }
  console.log("sum", sum);
  return sum;
}

function removeLeadingZeroes(str) {
  let len = str.length;

  while (str[0] === "0" && str.length > 1) {
    str = str.substring(1);
  }
  console.log("str", str);
  return str;
}
// addString("666", "444");
// multiplyString("666", "444");
removeLeadingZeroes("000490");
