const form = document.getElementById("form");
const error = document.createElement("span");
error.setAttribute("class", "error");

const errorEmail = document.createElement("span");
errorEmail.setAttribute("class", "error");
const errorAge = document.createElement("span");
errorAge.setAttribute("class", "error");
const errorBirthdate = document.createElement("span");
errorBirthdate.setAttribute("class", "error");
const errorDate = document.createElement("span");
errorDate.setAttribute("class", "error");
class FormElement {
  constructor(type, id, placeholder, value, rules) {
    this.type = type;
    this.id = id;
    this.placeholder = placeholder;
    this.value = value;
    this.rules = rules;
  }

  create(element) {
    this.element = document.createElement(element);
    this.element.setAttribute("id", this.id);
    this.element.placeholder = this.placeholder;
    this.element.value = this.value;
    this.element.rules = this.rules;
    this.element.style.marginTop = "20px";
    return this.element;
  }
  getValue(element) {
    return element.value;
  }
  validate() {
    const rules = this.rules.split("|");
    rules.forEach((rule) => {
      if (rule === "required") {
        const validInput = this.element.value;
        if (!validInput) {
          this.element.setAttribute("class", "required");
          this.element.placeholder = "Required";
        } else {
          this.element.placeholder = this.placeholder;
          this.element.removeAttribute("class", "required");
        }
      } else if (rule === "mail") {
        const validEmail = String(this.element.value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );

        if (!validEmail) {
          this.element.setAttribute("class", "required");
          errorEmail.textContent = "*Please enter a valid email address!";
          this.element.after(errorEmail);
        } else {
          this.element.removeAttribute("class", "required");
          errorEmail.textContent = "";
        }
      } else if (rule === "date") {
        const parsedDate = Date.parse(this.element.value);
        if (!parsedDate) {
          this.element.setAttribute("class", "required");
          errorDate.textContent = "*Please enter a valid date!";
          this.element.after(errorDate);
        } else {
          this.element.removeAttribute("class", "required");
          errorDate.textContent = "";
        }
      } else if (rule === "min:10") {
        if (this.element.value < 10) {
          this.element.setAttribute("class", "required");
          errorAge.textContent = "*Age must be greater than 10!";
          this.element.after(errorAge);
        } else {
          this.element.removeAttribute("class", "required");
          errorAge.textContent = "";
        }
      }
    });
  }
}
const inputNameEl = new FormElement("text", "name", "Name", "John", "required");
const inputEmailEl = new FormElement("text", "email", "Email", "mail@mail.com", "required|mail");
const inputAgeEl = new FormElement("text", "age", "Age", "10", "required|min:10");
const inputBirthdateEl = new FormElement("text", "birthdate", "Birthdate", "01.01.1970", "required|date");
const btnSubmit = new FormElement("", "submit", "", "", "");

const inputName = inputNameEl.create("input");
const inputEmail = inputEmailEl.create("input");
const inputAge = inputAgeEl.create("input");
const inputBirthdate = inputBirthdateEl.create("input");
const btn = btnSubmit.create("button");
btn.textContent = "Save";
form.append(inputName);
form.append(inputEmail);
form.append(inputAge);
form.append(inputBirthdate);
form.append(btn);

const validate = (e) => {
  e.preventDefault();
  inputNameEl.validate();
  inputEmailEl.validate();
  inputAgeEl.validate();
  inputBirthdateEl.validate();
  if (inputName.value === "" || inputAge.value === "" || inputAge.value < 10) {
    alert("Validation Error");
  } else {
    alert("Your Data was saved successfully!!!");
  }
};
btn.addEventListener("click", validate);
