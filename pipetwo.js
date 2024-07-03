/* Input:
const val = { salary: 10000 };

const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const result = pipe(
  getSalary,
  addBonus,
  deductTax 
)(val);

Output:
7700 */

function pipe(...fns) {
  return function (val) {
    return fns.reduce((acc, fn) => fn(acc), val);
  };
}

const val = { salary: 10000 };

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

const result = pipe(getSalary, addBonus, deductTax)(val);
console.log("result", result);
