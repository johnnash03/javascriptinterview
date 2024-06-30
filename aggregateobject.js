/* const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];
console.log(aggregate(endorsements, "user", "skill"));
Output: [
  {
    user: "Bill",
    skill: ["css", "javascript"],
  },
  {
    user: "Chad",
    skill: ["javascript"],
  },
  {
    user: "Sue",
    skill: ["css", "javascript", "html"],
  },
];
 */

const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];
aggregate(endorsements, "user", "skill");

function aggregate(arr, aggregator, aggregated) {
  let ob = {};
  arr.forEach((item) => {
    if (ob.hasOwnProperty(item[aggregator])) {
      ob[item[aggregator]].push(item[aggregated]);
    } else {
      ob[item[aggregator]] = [item[aggregated]];
    }
  });
  const res = Object.keys(ob).map((key) => {
    return {
      [key]: ob[key],
    };
  });
  console.log(ob);
  console.log(res);
}

/* Solution 2 */

const aggregate = (arr, on, who) => {
  // using reduce() method to aggregate
  const agg = arr.reduce((a, b) => {
    // get the value of both the keys
    const onValue = b[on];
    const whoValue = b[who];
    // if there is already a key present
    // merge its value
    if (a[onValue]) {
      a[onValue] = {
        [on]: onValue,
        [who]: [...a[onValue][who], whoValue],
      };
    }
    // create a new entry on the key
    else {
      a[onValue] = {
        [on]: onValue,
        [who]: [whoValue],
      };
    }
    // return the aggregation    return a;
  }, {});
  // return only values after aggregation
  return Object.values(agg);
};
