function consoleThis() {
  console.log(this);
}

// consoleThis();

const obj = {
  method: () => {
    console.log(this);
  },
  methodTwo: function () {
    console.log(this);
  },
};

obj.method();
obj.methodTwo();
