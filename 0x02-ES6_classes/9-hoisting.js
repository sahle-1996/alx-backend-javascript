export class TrainingClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class Trainee {
  constructor(firstName, lastName, trainingClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._trainingClass = trainingClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get trainingClass() {
    return this._trainingClass;
  }

  get description() {
    return `${this._firstName} ${this._lastName} - ${this._trainingClass.year} - ${this._trainingClass.location}`;
  }
}

const batch2019 = new TrainingClass(2019, 'San Francisco');
const batch2020 = new TrainingClass(2020, 'San Francisco');

const trainee1 = new Trainee('Guillaume', 'Salva', batch2020);
const trainee2 = new Trainee('John', 'Doe', batch2020);
const trainee3 = new Trainee('Albert', 'Clinton', batch2019);
const trainee4 = new Trainee('Donald', 'Bush', batch2019);
const trainee5 = new Trainee('Jason', 'Sandler', batch2019);

const traineeList = [trainee1, trainee2, trainee3, trainee4, trainee5];

export default traineeList;
