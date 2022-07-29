let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};
//Verify if the value is an Object
const isObject = (value) => {
  if (value === null) {
    return false;
  }
  return typeof value === "object";
};
// const objProps = function (obj) {
//   for (let val in obj) {
//     if (isObject(obj[val])) {
//       console.log(val);
//       objProps(obj[val]);
//     } else {
//       console.log("val, obj[val]");
//     }
//   }
// };

const createTree = (obj) => {
  let container = document.getElementById("container");

  for (let val in obj) {
    let list = document.createElement("ul");
    let listItem = document.createElement("li");
    listItem.innerHTML = val;
    list.appendChild(listItem);
    console.log(val);

    if (isObject(obj[val])) {
      for (let val1 in obj[val]) {
        let sublist = document.createElement("ul");
        let sublistItem = document.createElement("li");
        sublistItem.textContent = val1;
        sublist.appendChild(sublistItem);
        listItem.appendChild(sublist);
        const obj3 = obj[val][val1];
        if (isObject(obj3)) {
          for (let val2 in obj3) {
            let sublist1 = document.createElement("ul");
            let sublistItem1 = document.createElement("li");
            sublistItem1.textContent = val2;
            sublist1.appendChild(sublistItem1);
            sublistItem.appendChild(sublist1);
          }
        } else {
          console.log(obj[val1]);
        }
      }
    } else {
      console.log(val);
    }
    container.appendChild(list);
  }
};
createTree(data);
