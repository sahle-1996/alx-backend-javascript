// Define the Teacher interface with readonly and dynamic property requirements
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional attributes
}

// Extend Teacher interface to create Directors
interface Directors extends Teacher {
  numberOfReports: number;
}

// Implement a function to format teacher's name
const formatTeacherName = (firstName: string, lastName: string): string =>
  `${firstName[0].toUpperCase()}. ${lastName}`;

// Class definition for Student with required methods
class Pupil {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to indicate homework activity
  study = (): string => "Currently studying";

  // Method to display the student's first name
  showName = (): string => this.firstName;
}

// Define a type alias for the constructor interface
type PupilConstructor = new (firstName: string, lastName: string) => Pupil;

// Create a Teacher object
const teacherExample: Teacher = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Paris",
  contract: true, // Additional property
};

console.log(teacherExample);

// Instantiate a Student object and invoke its methods
const pupil = new Pupil("Alice", "Smith");
console.log(pupil.showName());
console.log(pupil.study());
