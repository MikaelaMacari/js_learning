//------------------- Task #12 - destructuring assignment --------------

const person = {
  first: "Ion",
  last: "Creanga",
  company: "Amintiri din copilarie SRL",
};
const displayName = ({ first: firstName, last: lastName, company: companyName }) => {
  console.log(`Name: ${firstName} ${lastName}, Company: ${companyName}`);
};

displayName(person);
