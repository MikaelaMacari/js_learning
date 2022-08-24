const result = document.getElementById("result");

async function userRequest() {
  result.textContent = "Waiting for responce...";
  const response = await serverResponse();
  setTimeout(() => {
    result.textContent = response;
  }, 2000);
}
function serverResponse() {
  return new Promise((resolve) => {
    resolve("Response from server");
  });
}
userRequest();
