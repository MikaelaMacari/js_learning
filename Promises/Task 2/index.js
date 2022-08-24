const result = document.getElementById("result");

function userRequest() {
  result.textContent = "Waiting for responce...";
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = serverResponse().then((textContent) => (result.textContent = textContent));
      resolve(response);
    }, 2000);
  });
}
function serverResponse() {
  return new Promise((resolve) => {
    resolve("Response from server");
  });
}
userRequest();
