function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

Dog.prototype.bark = function () {
  console.log("Woof!");
};

const bolt = new Dog("bolt");

bolt.makeSound();
bolt.bark();
