//------------------- Task #7 - getters --------------

const person = {
  name: "Person",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: "email@domain.com",
    get fullContact() {
      return `${this.phone},${this.email}`;
    },
  },
  address: "Moldova",
  get details() {
    return ` ${this.name}, ${this.age}, ${this.address}`;
  },
};
console.log(person.contacts.fullContact);
