/**
 * Reads the CSV file asynchronously and generates a structured report from the data
 */
import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    } else {
      const rows = data.trim().split('\n');
      rows.shift(); // Remove header row
      const groupedData = {};
      
      rows.forEach((row) => {
        const fields = row.split(',');
        const field = fields[3];
        const firstName = fields[0];
        
        if (field && firstName) {
          groupedData[field] = groupedData[field] || [];
          groupedData[field].push(firstName);
        }
      });
      
      resolve(groupedData);
    }
  });
});

export default readDatabase;
