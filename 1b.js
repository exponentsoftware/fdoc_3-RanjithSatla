/*Copy the student object to newStudent without mutating the original object. In the new object add the following ?

	1. Add Bootstrap with level 8 to the front end skill sets
	2. Add Express with level 9 to the back end skill sets
	3. Add SQL with level 8 to the data base skill sets
	4. Add SQL without level to the data science skill sets*/

const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

//// **** Copy Obj ******/////

const newStudent = {
  ...student,
  skills: {
    frontEnd: [...student.skills.frontEnd, { skill: "Bootstrap", level: 8 }],
    backEnd: [...student.skills.backEnd, { skill: "Express", level: 8 }],
    dataBase: [...student.skills.dataBase, { skill: "SQL", level: 8 }],
    dataScience: [...student.skills.dataScience, { skill: "SQL" }],
  },
};
console.log(newStudent);

/* 	Use the student object to solve the following questions:
   a. Find the length of student object keys
   b. Find the length of the student object values
   c. Find the length of skills object keys
   d. check if the student object has graphicDesign property
   e. Iterate the keys of the student object */

for (const obj in student) {
  console.log(obj.key);
}
