//Selectors
const userName = document.getElementById("name");
const city = document.getElementById("city");
const languageRo = document.getElementById("languageRo");
const languageEn = document.getElementById("languageEn");
const languageFr = document.getElementById("languageFr");
const message = document.getElementById("message");
const clearBtn = document.getElementById("clearBtn");
const saveBtn = document.getElementById("saveBtn");

//Variables
const users = [];

//Functions
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const removeTask = (element) => {
  const itemIndex = tasks.findIndex((item) => item.id === Number(element.id));
  tasks.splice(itemIndex, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const clearValues = () => {
  userName.value = "";
  message.value = "";
  languageRo.checked = false;
  languageEn.checked = false;
  languageFr.checked = false;
  message.value = "";
  city.selectedIndex = 0;
};
const getLanguage = (arr) => {
  if (languageRo.checked) {
    arr.push("Romanian");
  }
  if (languageEn.checked) {
    arr.push("English");
  }
  if (languageFr.checked) {
    arr.push("French");
  }
};
const addUser = (e) => {
  e.preventDefault();
  let language = [];
  getLanguage(language);
  users.push({
    id: randomInteger(99, 1000),
    name: userName.value,
    language: language,
    city: city.value,
    message: message.value,
  });

  localStorage.setItem("users", JSON.stringify(users));
  clearValues();
};

//Event listeners
saveBtn.addEventListener("click", addUser);
clearBtn.addEventListener("click", clearValues);
