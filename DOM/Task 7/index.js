const pages = document.querySelectorAll("a");
console.log(pages);
const externalPages = pages.forEach((el) => {
  const attribute = el.getAttribute("href");
  if (attribute.includes("https")) {
    el.style.color = "red";
  }

  // if(attribute.includes("https"))
});
