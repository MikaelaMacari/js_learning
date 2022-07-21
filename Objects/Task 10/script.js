//------------------- Task #10 working with keys --------------
const person1 = {
  name: "Person 1",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: "email@domain.com",
  },
  address: `Moldova`,
};

const person2 = {
  name: "Person 2",
  age: 123,
  salary: 1800.53,
  contacts: {
    phone: "125",
    email: "email@domain.com",
  },
  address: `Moldova`,
};

const intersection = (obj1, obj2) => {
  const matchedValues = {};
  Object.keys(obj1).forEach((item) => {
    if (obj1[item] === obj2[item]) {
      matchedValues[item] = obj1[item];
    }
  });
  return matchedValues;
};
console.log(intersection(person1, person2));
