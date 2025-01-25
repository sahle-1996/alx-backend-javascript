import { RowID, RowElement } from './interface';
import CRUD from './crud';

// Create a new row with initial data
const newEntry: RowElement = {
  firstName: 'Alexander',
  lastName: 'Hamilton',
};

// Insert the row and retrieve the new ID
const createdRowID: RowID = CRUD.insertRow(newEntry);

// Update the row data by adding a new property
newEntry.age = 30;
const modifiedEntry: RowElement = newEntry;

// Perform the update operation
CRUD.updateRow(createdRowID, modifiedEntry);

// Delete the row using the row ID
CRUD.deleteRow(createdRowID);
