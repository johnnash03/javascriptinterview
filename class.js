class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  sound;
  #weight;
  constructor(name, sound, weight) {
    super(name);
    this.sound = sound;
    this.#weight = weight;
  }
  makeSound() {
    console.log(`${this.name} makes ${this.sound}`);
  }
}

const newDog = new Dog("Mikey", "woofs", 7);
newDog.makeSound();
console.log(newDog.sound);
// console.log(newDog.#weight);
