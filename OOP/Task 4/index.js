class Validator {
  static isEmail(email) {
    const isEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (isEmail) {
      return true;
    } else {
      return false;
    }
  }
  static isDomain(domain) {
    return domain.includes("https");
  }
  static isDate(date) {
    const parsedDate = Date.parse(date);
    if (parsedDate) {
      return true;
    } else {
      return false;
    }
  }
  static isPhone(phone) {
    var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (phone.match(regex)) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(Validator.isEmail("phphtml@mail.ru"));
console.log(Validator.isDomain("https://www.w3schools.com/js/js_class_static.asp"));
console.log(Validator.isDate("12.05.2020"));
console.log(Validator.isPhone("1234567890"));
