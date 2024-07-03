/* computeAmount()
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();

143545000; */

function computeAmount1() {
  this.val = 0;
  this.thousand = function (x) {
    this.val += x * 1000;
    return this;
  };
  this.lacs = function (x) {
    this.val += x * 100000;
    return this;
  };
  this.crore = function (x) {
    this.val += x * 10000000;
    return this;
  };
  this.value = function () {
    return this.val;
  };
  return this;
}

const computeAmount = function () {
  return {
    store: 0,
    crore: function (val) {
      this.store += val * Math.pow(10, 7);
      return this;
    },

    lacs: function (val) {
      this.store += val * Math.pow(10, 5);
      return this;
    },

    thousand: function (val) {
      this.store += val * Math.pow(10, 3);
      return this;
    },

    hundred: function (val) {
      this.store += val * Math.pow(10, 2);
      return this;
    },

    ten: function (val) {
      this.store += val * 10;
      return this;
    },

    unit: function (val) {
      this.store += val;
      return this;
    },

    value: function () {
      return this.store;
    },
  };
};

let amount = computeAmount()
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();

console.log(amount);
