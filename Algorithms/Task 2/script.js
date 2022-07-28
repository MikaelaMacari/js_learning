const fibbonaciFunction = (number) => {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  console.log("Fibonacci Series:");
  for (let i = 0; i < number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
};
fibbonaciFunction(4);
