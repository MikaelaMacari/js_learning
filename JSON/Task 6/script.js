const showData = async () => {
  const requestURL = "./person.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const employeesData = await response.json();
  console.log(employeesData);
  displayData(employeesData);
};

function addHeading(employee, table) {
  const mainHeading = document.createElement("tr");
  const secondaryHeading = document.createElement("tr");

  for (const key in employee) {
    const mainCol = document.createElement("th");
    const colLength = Object.keys(employee[key]).length;

    mainCol.innerHTML = key;
    mainCol.setAttribute("colspan", colLength);

    for (const childKey in employee[key]) {
      const secondaryCol = document.createElement("th");
      secondaryCol.innerHTML = childKey;
      secondaryHeading.appendChild(secondaryCol);
    }

    mainHeading.appendChild(mainCol);
  }

  table.appendChild(mainHeading);
  table.appendChild(secondaryHeading);
}

function displayData(employees) {
  const table = document.getElementById("employees");

  const [employee] = employees;

  addHeading(employee, table);

  for (const employee of employees) {
    const row = addRow(employee);

    table.appendChild(row);
  }
}

function addRow(employee) {
  const row = document.createElement("tr");

  for (const key in employee) {
    addCol(row, employee[key]);
  }

  return row;
}

function addCol(row, object) {
  for (const childKey in object) {
    const td = document.createElement("td");

    if (typeof object[childKey] !== "object") {
      td.innerHTML = object[childKey];
    } else {
      const workInfoTable = document.createElement("table");
      const workInfoRow = document.createElement("tr");

      const workInfoCol = document.createElement("td");
      const workSchedule = [...Object.values(object[childKey])];
      console.log(workSchedule);
      workInfoCol.innerHTML = workSchedule;
      td.style.padding = 0;
      workInfoRow.appendChild(workInfoCol);
      workInfoTable.appendChild(workInfoRow);
      td.appendChild(workInfoTable);
    }
    row.appendChild(td);
  }
}

showData();

// const displayEmployeesData = (arr) => {
//   document.getElementById("employees").innerHTML = `
//   ${arr
//     .map((employee) => {
//       return `
//     <div class="employees">
//       <div class="details">
//         <div class="description">
//           <h5>Name: </h5>
//           <p>${employee.personalInfo.name}<p>
//         </div>
//         <div class="description">
//           <h5>IDNP: </h5>
//           <p>${employee.personalInfo.idnp}<p>
//         </div>
//         <div class="description">
//           <h5>Birthdate: </h5>
//           <p>${employee.personalInfo.dateOfBirth}<p>
//         </div>
//         <div class="description">
//           <h5>Birthplace: </h5>
//           <p>${employee.personalInfo.placeOfBirth}<p>
//         </div>
//         <div class="description">
//           <h5>Gender: </h5>
//           <p>${employee.personalInfo.gender}<p>
//         </div>
//         <div class="description">
//           <h5>Phone 1: </h5>
//           <p>${employee.contacts.phone}<p>
//         </div>
//         <div class="description">
//           <h5>Phone 2: </h5>
//           <p>${employee.contacts.homePhone}<p>
//         </div>
//         <div class="description">
//           <h5>Email: </h5>
//           <p>${employee.contacts.email}<p>
//         </div>
//         <div class="description">
//           <h5>Address: </h5>
//           <p>${employee.contacts.address}<p>
//         </div>
//         <div class="description">
//           <h5>Job Title: </h5>
//           <p>${employee.workInfo.jobTitle}<p>
//         </div>
//         <div class="description">
//           <h5>Department: </h5>
//           <p>${employee.workInfo.department}<p>
//         </div>
//         <div class="description">
//           <h5>Start Of Job: </h5>
//           <p>${employee.workInfo.startDateOfJob}<p>
//         </div>
//         <div class="description">
//           <h5>Salary: </h5>
//           <p>${employee.workInfo.salary}<p>
//         </div>
//         <div class="description">
//           <h5>Years of Experience: </h5>
//           <p>${employee.workInfo.workExperience}<p>
//         </div>
//         <div class="description">
//           <h5>Work Schedule: </h5>
//           <p>
//             ${employee.workInfo.workSchedule.startWork} - ${employee.workInfo.workSchedule.endWork}
//           <p>
//         </div>
//         <div class="description">
//           <h5>Lunch: </h5>
//           <p>${employee.workInfo.workSchedule.lunch}<p>
//         </div>
//       </div>
//   </div>
//     `;
//     })
//     .join("")}
//   `;
// };
// const mediumSalary = (arr) => {
//   return arr.map((employee) => employee.workInfo.salary).reduce((acc, employeeSalary) => acc + employeeSalary, 0) / arr.length;
// };
// const sumOfSalaries = (arr) => {
//   return arr.map((employee) => employee.workInfo.salary).reduce((acc, employeeSalary) => acc + employeeSalary, 0);
// };
// const minimumSalary = (arr) => {
//   return Math.min(...arr.map((employee) => employee.workInfo.salary));
// };
// const maximumSalary = (arr) => {
//   return Math.max(...arr.map((employee) => employee.workInfo.salary));
// };
// const displaySalaryDetails = (arr) => {
//   document.getElementById("salary-details").innerHTML = `
//   <div class="salary">
//     <h2>Medium Salary:  <span>${mediumSalary(arr)}$</span></h2>
//     <h2>Minimum Salary:  <span>${minimumSalary(arr)}$</span> </h2>
//     <h2>Maximum Salary: <span> ${maximumSalary(arr)}$</span> </h2>
//     <h2>Sum of All Salaries:  <span>${maximumSalary(arr)}$</span> </h2>
//   </div>
//   `;
// };
//
// showData();
