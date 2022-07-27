/* JSON Object URL
https://jsoneditoronline.org/#left=cloud.4d64af2fe8dc488f8e24842a755ea352
 */
let name = document.getElementById("name");
let idnp = document.getElementById("idnp");
let dateOfBirth = document.getElementById("dateOfBirth");
let placeOfBirth = document.getElementById("placeOfBirth");
let gender = document.getElementById("gender");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let email = document.getElementById("email");
let homePhone = document.getElementById("homePhone");
let jobTitle = document.getElementById("jobTitle");
let department = document.getElementById("department");
let startDateOfJob = document.getElementById("startDateOfJob");
let salary = document.getElementById("salary");
let workExperience = document.getElementById("workExperience");
let workingHours = document.getElementById("workingHours");
let lunch = document.getElementById("lunch");

const showData = async () => {
  const requestURL = "./person.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const personDetails = await response.json();
  displayPersonalData(personDetails);
  displayContactData(personDetails);
  displayWorkingData(personDetails);
  console.log(personDetails);
};

const displayPersonalData = (obj) => {
  name.textContent = obj.personalInfo.name;
  idnp.textContent = obj.personalInfo.idnp;
  dateOfBirth.textContent = obj.personalInfo.dateOfBirth;
  placeOfBirth.textContent = obj.personalInfo.placeOfBirth;
  gender.textContent = obj.personalInfo.gender;
};
const displayWorkingData = (obj) => {
  jobTitle.textContent = obj.workInfo.jobTitle;
  department.textContent = obj.workInfo.department;
  startDateOfJob.textContent = obj.workInfo.startDateOfJob;
  salary.textContent = obj.workInfo.salary;
  workExperience.textContent = obj.workInfo.workExperience;
  workingHours.textContent = `Working Hours: ${obj.workInfo.workSchedule.startWork}-${obj.workInfo.workSchedule.endWork} Lunch: ${obj.workInfo.workSchedule.lunch}`;
};
const displayContactData = (obj) => {
  phone.textContent = obj.contacts.phone;
  address.textContent = obj.contacts.address;
  email.textContent = obj.contacts.email;
  homePhone.textContent = obj.contacts.homePhone;
};

showData();
