class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

let worker = new Worker("Иван", "Иванов", 10, 31);
let worker1 = new Worker("John", "Smith", 20, 31);
let worker2 = new Worker("John", "Doe", 25, 31);
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
console.log(worker.name, worker.surname, worker.getSalary());
console.log(worker1.name, worker1.surname, worker1.getSalary());
console.log(worker2.name, worker2.surname, worker2.getSalary());
