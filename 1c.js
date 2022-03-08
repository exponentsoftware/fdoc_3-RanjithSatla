/* 	Use the student object to solve the following questions:
   a. Find the length of student object keys
   b. Find the length of the student object values
   c. Find the length of skills object keys
   d. check if the student object has graphicDesign property
   e. Iterate the keys of the student object */

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

let count = 0;
for (const key in student) {
  count = count + key.length;
}
console.log(count);

for (const key in student) {
  count = count + Object.values(key).length;
}

console.log(count);

// Values in Obj

let counter = 0;

function countValuesInObject(obj) {
  for (let k in obj) {
    if (typeof obj[k] != "object") {
      counter++;
    } else {
      countValuesInObject(obj[k]);
    }
  }
  return counter;
}
console.log(countValuesInObject(student));

// Keys in Skills :

let counters = 0;

function countKeysInSkillsObj(obj) {
  for (var k in obj) {
    if (k == "skills") {
      for (var l in obj[k]) {
        counters++;
      }
    }
  }
  return count;
}
console.log(countKeysInSkillsObj(student));
// Check Property In Obj :

let result = false;

function checkPropertyInObj(obj, value) {
  if (obj.hasOwnProperty(value)) {
    result = true;
  } else {
    for (var k in obj) {
      typeof obj[k] === "object" && checkPropertyInObj(obj[k], value);
    }
  }

  return result;
}

console.log(checkPropertyInObj(student, "skill"));
