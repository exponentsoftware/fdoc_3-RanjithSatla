/*const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
     console.log(name, skills, scores)
     console.log(jsScore, reactScore)*/
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [names, skills, scores] = student;
const [hTMScore, cSSScore, jsScore, reactScore] = student[2];
console.log(names, skills, scores);
console.log(jsScore, reactScore);

//*******Write a function called convertArrayToObject which can convert the array to a structured object.******//
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

// const convertArrayToObject = (students) => {
//   var ob = {};
//   for (var i = 0; i < students.length; ++i) ob.name = students[0][0];
//   ob.skills = students[0][1];
//   ob.scores = students[0][2];
//   return ob;
// };
// console.log(convertArrayToObject(students));

const convertArrayToObject = (students) => {
  const allDetails = students.map((item) => {
    const newObj = {
      name: item[0],
      skills: item[1],
      scores: item[2],
    };
    return newObj;
  });
  return allDetails;
};
console.log(convertArrayToObject(students));

//// **** Copy Obj ******/////

const newStudent = {
  ...student,
  skills: {
    ...student.skills,
    frontEnd: [...student.skills.frontEnd, { skill: "Bootstrap", level: 8 }],
    backEnd: [...student.skills.backEnd, { skill: "Express", level: 8 }],
    dataBase: [...student.skills.dataBase, { skill: "SQL", level: 8 }],
    dataScience: [...student.skills.dataScience, { skill: "SQL" }],
  },
};
//console.log(newStudent);
