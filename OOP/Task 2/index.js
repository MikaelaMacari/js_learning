class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  get getName() {
    return this.name;
  }

  set setName(newName) {
    this.name = newName;
  }
  get getSurname() {
    return this.surname;
  }

  set setSurname(newSurname) {
    this.surname = newSurname;
  }
}

let worker = new Person("Иван", "Иванов");
console.log(worker.getName);
console.log(worker.getSurname);
console.log((worker.setSurname = "Петров"));
console.log(worker.getSurname);
