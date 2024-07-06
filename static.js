class MyClass {
  static #instance = null; // private static property

  constructor() {
    if (MyClass.#instance) {
      return MyClass.#instance;
    }
    MyClass.#instance = this;

    // ... Your rest of the constructor code goes after this
  }
}

var instanceOne = new MyClass();
var instanceTwo = new MyClass();

console.log(instanceOne === instanceTwo); // Logs "true"
