// Defining the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two students with the required properties
const studentA: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 25,
  location: "New York",
};

const studentB: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 30,
  location: "California",
};

// Array containing the list of students
const studentsList: Array<Student> = [studentA, studentB];

// Selecting the body of the HTML document
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

// Creating the table and its header
const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = document.createElement("thead");
const headerRow: HTMLTableRowElement = document.createElement("tr");

const headerCell1: HTMLTableCellElement = document.createElement("th");
const headerCell2: HTMLTableCellElement = document.createElement("th");

headerCell1.innerText = "First Name";
headerCell2.innerText = "Location";

// Applying styles to header cells and table
[headerCell1, headerCell2].forEach((header) => {
  header.style.border = "1px solid black";
  header.style.padding = "10px";
});
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

// Loop through studentsList and create rows dynamically
studentsList.forEach((student) => {
  const tableRow: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");

  firstNameCell.innerText = student.firstName;
  locationCell.innerText = student.location;

  // Applying styles to the cells
  [firstNameCell, locationCell].forEach((cell) => {
    cell.style.border = "1px solid black";
    cell.style.padding = "10px";
  });

  tableRow.appendChild(firstNameCell);
  tableRow.appendChild(locationCell);
  table.appendChild(tableRow);
});

// Append the completed table to the body
body.appendChild(table);

