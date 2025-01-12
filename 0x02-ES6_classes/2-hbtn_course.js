export default class ALXCourse {
  constructor(title, duration, learners) {
    this.title = title;
    this.duration = duration;
    this.learners = learners;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Title must be a string');
    }
    this._title = value;
  }

  get duration() {
    return this._duration;
  }

  set duration(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Duration must be a number');
    }
    this._duration = value;
  }

  get learners() {
    return this._learners;
  }

  set learners(value) {
    if (!Array.isArray(value) || !value.every((learner) => typeof learner === 'string')) {
      throw new TypeError('Learners must be an array of strings');
    }
    this._learners = value;
  }
}
