const obj = {
  count: 10,
  doSomethingLater() {
    console.log("this", this.count);
    setTimeout(function () {
      // the function executes on the window scope
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // logs "NaN", because the property "count" is not in the
