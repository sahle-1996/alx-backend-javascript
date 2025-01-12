export default class ALXCourse {
  constructor(name, length, students) {
    this._validateName(name);
    this._validateLength(length);
    this._validateStudents(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._validateName(value);
    this._name = value;
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    this._validateLength(value);
    this._length = value;
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    this._validateStudents(value);
    this._students = value;
  }

  // Validation methods
  _validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  _validateLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  _validateStudents(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}	
