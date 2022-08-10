class Transport {
  constructor(model, price, year, type) {
    this.model = model;
    this.price = price;
    this.year = year;
    this.type = type;
  }
  getModel() {
    return this.model;
  }
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
  movement() {
    return this.type;
  }
  getInfo() {
    return `Model:  ${this.getModel()}, Years:  ${this.getAge()}, Type:  ${this.movement()})`;
  }
}

class Airplane extends Transport {
  constructor(...args) {
    super(...args);
  }
}
class Car extends Transport {
  constructor(...args) {
    super(...args);
  }
}
class Truck extends Transport {
  constructor(...args) {
    super(...args);
  }
}

class Boeing extends Airplane {
  constructor(...args) {
    super(...args);
  }
}
class Airbus extends Airplane {
  constructor(...args) {
    super(...args);
  }
}
class Mercedes extends Car {
  constructor(...args) {
    super(...args);
  }
}
class Man extends Truck {
  constructor(...args) {
    super(...args);
  }
}
const boeing = new Boeing("Boeing", 350000, 2020, "Air Transportation");
const airbus = new Airbus("Airbus", 250000, 2017, "Air Transportation");
const mercedes = new Mercedes("Mercedes", 70000, 2021, "Road Transportation");
const man = new Man("MAN", 150000, 2019, "Road Transportation");
console.log(boeing.getInfo());
console.log(airbus.getInfo());
console.log(mercedes.getInfo());
console.log(man.getInfo());
