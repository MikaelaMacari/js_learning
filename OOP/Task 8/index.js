class Elem {
  constructor(selector) {
    this.elem = document.querySelector(selector);
  }

  html(content) {
    this.elem.textContent += content;
    return this;
  }
  append(content) {
    this.elem.append(content);
    return this;
  }
  prepend(content) {
    this.elem.prepend(content);
    return this;
  }
  attr(name, value) {
    this.elem.setAttribute(name, value);
    return this;
  }
}
let elem = new Elem(".selector");
elem.html("!"); //запишет в текст элемента '!'
elem.append("!"); //запишет в начало элемента '!'
elem.prepend("!"); //запишет в конец элемента '!'
elem.attr("class", "www"); //запишет в атрибут class значение www

elem.html("hello").append("!").prepend("!");
elem.attr("class", "www").attr("title", "hello");
