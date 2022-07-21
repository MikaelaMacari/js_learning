//------------------- Task #11 array of objects --------------
const students = [
  {
    name: "Student 1",
    marks: [8, 10, 7, 5, 4],
  },
  {
    name: "Student 2",
    marks: [9, 10, 9, 8, 9],
  },
  {
    name: "Student 3",
    marks: [5, 4, 3, 5, 5],
  },
  {
    name: "Student 4",
    marks: [8, 9, 9, 8, 10],
  },
  {
    name: "Student 5",
    marks: [10, 10, 9, 10, 9],
  },
  {
    name: "Student 6",
    marks: [5, 7, 7, 5, 8],
  },
  {
    name: "Student 7",
    marks: [5, 2, 3, 5, 5],
  },
];

const score = students.map((item) => {
  return item.marks.reduce((acc, curr) => acc + curr, 0) / item.marks.length;
});

const calcMediumScore = (arr) => {
  return arr.forEach((item) => {
    const score = item.marks.reduce((acc, curr) => acc + curr, 0) / item.marks.length;
    console.log(`${item.name} has ${score} score`);
  });
};

const showLowScoreStudends = (arr) => {
  return arr.forEach((item) => {
    const score = item.marks.reduce((acc, curr) => acc + curr, 0) / item.marks.length;
    if (score < 5) {
      console.log(`${item.name} has ${score} score`);
    }
  });
};

const showLowAndHigherScoreStudends = (arr) => {
  const maxScore = Math.max(...score);
  const minScore = Math.min(...score);
  return arr.forEach((item) => {
    const score = item.marks.reduce((acc, curr) => acc + curr, 0) / item.marks.length;
    if (score === maxScore) {
      console.log(`${item.name} has the higher score - ${maxScore}`);
    }
    if (score === minScore) {
      console.log(` ${item.name} has the minimum score - ${minScore}`);
    }
  });
};

const sortStudentsInDescendentOrder = (arr) => {
  const average = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  };

  arr.sort((a, b) => {
    if (average(a.marks) < average(b.marks)) {
      return -1;
    }
    if (average(a.marks) > average(b.marks)) {
      return 1;
    }
    return 0;
  });
  console.log(arr);
};

const showStudentWithHigherScore = (arr) => {
  const scoreOfClass = score.reduce((acc, curr) => acc + curr, 0) / score.length;
  return arr.forEach((item) => {
    const score = item.marks.reduce((acc, curr) => acc + curr, 0) / item.marks.length;
    if (score > scoreOfClass) {
      console.log(`${item.name} has a ${score} score witch is higher than ${scoreOfClass} - score of class`);
    }
  });
  console.log(scoreOfClass);
};

console.log("--------- Medium score of students ---------");
calcMediumScore(students);

console.log("--------- Students with score < 5 ---------");
showLowScoreStudends(students);

console.log("--------- Students with lower score and higher score ---------");
showLowAndHigherScoreStudends(students);

console.log("--------- Students in descendant order ---------");
sortStudentsInDescendentOrder(students);

console.log("--------- Students with higher score than score of class ---------");
showStudentWithHigherScore(students);
