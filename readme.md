//пробные варианты. задание 2

const jsonString =
`{ "student": { "name": "Anton", "age": 36, "skills": [ "javaskript", "HTML", "CSS" ], "salary": 80000 } } `;
const data = JSON.parse(jsonString); const student = data.student; const result = { name:
student.name, age: student.age, skills: student.skills, salary: Number(student.salary), };

console.log('result', result);
