class Animal {
  constructor(food, location) {
    this.food = food;
    this.location = location;
  }
  makeNoise() {
    return `says: `;
  }
  eat() {
    return `eats ${this.food}`;
  }
  sleep() {
    return `sleeps in ${this.location}`;
  }
}

class Dog extends Animal {
  constructor(food, location, name, noise) {
    super(food, location);
    this.name = name;
    this.noise = noise;
  }
  makeNoise() {
    return `${this.name} ${super.makeNoise()} "${this.noise}"`;
  }
  eat() {
    return `${this.name} ${super.eat()}.`;
  }
  sleep() {
    return `${this.name} ${super.sleep()}.`;
  }
}
class Cat extends Animal {
  constructor(food, location, name, noise) {
    super(food, location);
    this.name = name;
    this.noise = noise;
  }
  makeNoise() {
    return `${this.name} ${super.makeNoise()} "${this.noise}"`;
  }
  eat() {
    return `${this.name} ${super.eat()}.`;
  }
  sleep() {
    return `${this.name} ${super.sleep()}.`;
  }
}
class Horse extends Animal {
  constructor(food, location, name, noise) {
    super(food, location);
    this.name = name;
    this.noise = noise;
  }
  makeNoise() {
    return `${this.name} ${super.makeNoise()} "${this.noise}"`;
  }
  eat() {
    return `${this.name} ${super.eat()}.`;
  }
  sleep() {
    return `${this.name} ${super.sleep()}.`;
  }
}

const dog = new Dog("bone", "cage", "Dog", "Woof, Woof");
const cat = new Cat("meat", "kitchen", "Cat", "Meow, Meow");
const horse = new Dog("grass", "stable", "Horse", "Neigh, Neigh");
console.log(dog.makeNoise());
console.log(cat.sleep());
console.log(horse.eat());
