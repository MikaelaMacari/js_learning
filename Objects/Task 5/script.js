//------------------- Task #5 - object processing --------------

const user = {
  name: "Person",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: "email@domain.com",
  },
  address: `Moldova`,
};
user.contacts.phone = "+37312345678";
delete user.address;

console.log(user);
