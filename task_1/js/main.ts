const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

function printTeacher(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}. ${lastName}`;
}
console.log(printTeacher("John", "Doe"));

class StudentClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
   workOnHomework(): string {
     return 'Currently working';
   }
  displayName(): string {
    return this.firstName;
  }
}
const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());
