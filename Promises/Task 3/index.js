const result = document.getElementById("result");

async function userRequest() {
  result.textContent = "Waiting for responce...";
  return await new Promise((resolve) => {
    setTimeout(() => {
      const response = serverResponse().then((textContent) => (result.textContent = textContent));
      resolve(response);
    }, 2000);
  });
}
async function serverResponse() {
  return await new Promise((resolve) => {
    resolve("Response from server");
  });
}
userRequest();
