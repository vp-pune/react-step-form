const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path'); // Import path module
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const newFormData = req.body;
      
  // Ensure the file exists
  if (!fs.existsSync('formData.json')) {
    fs.writeFileSync('formData.json','[]');
  }

  // Read existing data
  fs.readFile('formData.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred while reading the file');
    }

    // Parse existing data
    let jsonData;
    try {
      jsonData = JSON.parse(data);
      if (!Array.isArray(jsonData)) {
        jsonData = []; // If the existing data is not an array, reset it
      }
    } catch (parseErr) {
      console.error(parseErr);
      jsonData = []; // If there is a parsing error, reset it
    }

    // Append new data
    jsonData.push(newFormData);

    // Save updated data
    fs.writeFile('formData.json', JSON.stringify(jsonData, null, 2), (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
        return res.status(500).send('An error occurred while writing the file');
      }
      res.send('Form data saved to formData.json');
    });
  });
});

// Corrected GET request to fetch data
app.get('/api/data', (req, res) => {
  const filePath = path.join(__dirname, 'formData.json'); // Adjust the path to your JSON file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
