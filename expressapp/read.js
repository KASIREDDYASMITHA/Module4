const fs = require('fs');
const path = require('path');

function readFileContent() {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'Data.txt'), 'utf-8');
    return data;
  } catch (err) {
    return "Error reading file: " + err.message;
  }
}

module.exports = readFileContent;
