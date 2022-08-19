//shows first, because it’s a regular synchronous call.
console.log("1");

// shows last, because it’s a macrotask.
setTimeout(function () {
  console.log("2");
}, 0);

// shows third, because .then passes through the microtask queue, and runs after the current code.
Promise.resolve().then(() => console.log("3"));

//shows second, because it’s a regular synchronous call.
console.log("4");
