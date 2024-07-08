/* 
Static properties cannot be directly accessed on instances of the class.
Instead, they're accessed on the class itself.
Static methods are often utility functions, 
such as functions to create or clone objects, 
whereas static properties are useful for caches, 
fixed-configuration, or any other data you don't need to be replicated across instances.
*/

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

// Static methods can be used to create instances of the class in a specific manner.
class MyClass {
  constructor(name) {
    this.name = name;
  }

  static createWithDefaultName() {
    return new MyClass("Default Name");
  }
}

const obj = MyClass.createWithDefaultName();
console.log(obj.name); // Outputs: 'Default Name'

// Static methods can be used to clone an existing instance of the class.
class MyClass {
  constructor(name) {
    this.name = name;
  }

  static cloneInstance(instance) {
    return new MyClass(instance.name);
  }
}

const original = new MyClass("Original");
const clone = MyClass.cloneInstance(original);
console.log(clone.name); // Outputs: 'Original'
