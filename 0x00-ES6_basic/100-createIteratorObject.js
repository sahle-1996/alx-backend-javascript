export default function createEmployeeIterator(report) {
  return (function* generateEmployees() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
