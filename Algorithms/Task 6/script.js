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

const createTree = (obj) => {
  let container = document.getElementById("container");
  // for (const item in obj) {
  //   const ul = document.createElement("ul");
  //   ul.innerHTML = item;
  //   container.appendChild(ul);
  // }
  // container.innerHTML = `
  //   ${Object.entries(obj)
  //     .map((item) => {
  //       return `
  //         <ul>
  //           <li>${item[0]}
  //             <ul>
  //               <li>${console.log(item.map((el) => el[0]))}</li>
  //             </ul>
  //           </li>

  //         </ul>
  //       `;
  //     })
  //     .join("")}
  // `;
  // const arrOfObjects = ;
  // arrOfObjects.map((item) => {
  //   const li = document.createElement("li");
  //   li.innerHTML = item;
  //   ul.appendChild(li);
  // });

  // var obj = {
  //   "Fruits" : ["Apple", "Banana", "Cherry"],
  //   "Vegetables" : ["Celery", "Cabbage", "Carrot"]
  // };

  //  CREATE LIST
  let list = document.createElement("ul");
  let listItem = document.createElement("li");
  // for (let i in obj) {
  // SUB-LIST HEADING
  // let item = document.createElement("li");
  // let subitem = document.createElement("strong");
  // subitem.innerHTML = i;
  // list.appendChild(item);
  // item.appendChild(subitem);

  // SUB-LIST ITEMS
  // let sublist = document.createElement("ul");
  // item.appendChild(sublist);
  const arrOfObjects = Object.entries(obj);
  // container.innerHTML = `
  // ${
  const listItemsArr = [];
  for (const item in obj) {
    listItemsArr.push(item);
  }
  console.log(listItemsArr);

  const arr = arrOfObjects.map((el) => {
    return el[1];
  });
  const subItemArr = [...Object.keys(arr[0]), ...Object.keys(arr[1])];
  console.log(subItemArr);

  const sublistItemsArr = arrOfObjects.map((el) => {
    return el;
  });
  console.log(sublistItemsArr);

  // }

  // `;

  // console.log(arrOfObjects);

  // for (let j in obj) {
  // subitem = document.createElement("li");
  // subitem.innerHTML = j;
  // sublist.appendChild(subitem);
  // console.log(j);
  // }
  // }

  // (B3) APPEND LIST TO CONTAINER
};
createTree(data);
