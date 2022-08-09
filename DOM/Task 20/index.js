const tableBody = document.getElementById("tableBody");
const userType = document.getElementById("userType");
const addBtn = document.getElementById("addBtn");

const tr = document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");

const text1 = document.createTextNode("User Type");
td1.appendChild(text1);
tr.appendChild(td1);
tr.appendChild(td2);

tableBody.appendChild(tr);

const removeUserType = () => {};
const addUserType = () => {
  let userTypeValue = userType.value;
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const text1 = document.createTextNode(userTypeValue);
  td2.innerHTML = '<i class="fa-solid fa-x"></i>';
  td2.style.color = "red";
  td2.style.width = "40px";
  td2.style.paddingLeft = "15px";
  td2.style.paddingRight = "15px";

  td1.appendChild(text1);
  tr.appendChild(td1);
  tr.appendChild(td2);

  tableBody.appendChild(tr);

  userType.value = "";

  td2.addEventListener("click", () => {
    tableBody.removeChild(tr);
  });
};
addBtn.addEventListener("click", addUserType);
