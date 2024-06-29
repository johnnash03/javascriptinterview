/* 
The Singleton Design Pattern in JavaScript is a design pattern 
that restricts the instantiation of a class to a single instance. 
This means that no matter how many times you try to create a new 
instance of the class, you will always get the same instance. 
This pattern is useful when exactly one object is needed to coordinate actions across the system.
For example, if you have a logging system in your application, 
you might want to have only one instance of the logger to avoid inconsistencies in the log.
*/

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.data = {};
    Singleton.instance = this;
  }

  setData(key, value) {
    this.data[key] = value;
  }

  getData(key) {
    return this.data[key];
  }
}

const singleton1 = new Singleton();
singleton1.setData("name", "Singleton Pattern");

const singleton2 = new Singleton();
console.log(singleton2.getData("name")); // Output: Singleton Pattern

console.log(singleton1 === singleton2); // Output: true

const globalMap = new Map();

export default {
  getInstance() {
    return globalMap;
  },
};

/* 
// With lazy instantiation
let globalMap;

export default {
  getInstance() {
    if (globalMap === undefined) {
      globalMap = new Map();
    }

    return globalMap;
  },
}; 

*/
