/* Dados los siguientes arreglos de objetos completas la misión: */

const courses = [
  { _id: 1, title: "JavaScript I" },
  { _id: 2, title: "HTML y CSS I" },
];

const students = [
  { _id: 1, name: "Pedro Perez" },
  { _id: 2, name: "Maria Gomez" },
];

const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 },
];

/* Imprimir los cursos y los estudiantes de cada curso con el siguiente formato:

- JavaScript I
  * Pedro Perez
- HTML y CSS I
  * Pedro Perez
  * Maria Gomez */

for (let i of courses) {
  console.log(i.title);

  for (let j of enrollments) {
    if (j.course_id === i._id) {
      const student = students.find((k) => k._id === j.student_id);
      console.log(`* ${student.name}`);
    }
  }
}

/* Imprimir los estudiantes y los cursos a los que están matriculados con el siguiente formato:

- Pedro Perez
  * JavaScript I
  * HTML y CSS I
- Maria Gomez
  * HTML y CSS I */

for (let i of students) {
  console.log(i.name);

  for (let j of enrollments) {
    if (j.student_id === i._id) {
      const curso = courses.find((k) => k._id === j.course_id);
      console.log(`* ${curso.title}`);
    }
  }
}
