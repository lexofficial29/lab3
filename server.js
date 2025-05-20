const express = require('express');
const http = require('http');
const fs = require('fs');

const app = express();
const PORT = 6969;

app.get('/', (req, res) => {
    fs.readFile(__dirname + "/client/pages/index.html", 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/marius.jpg', (req, res) => {
  fs.readFile(__dirname + "/client/pages/marius.jpg", 'utf8', (err, data) => {
      res.send(data);
  });
});
app.get('/api', (req, res) => {
  res.json(
    {
        "message": "megalocatii",
        "locations": [
          {
          "name": "uwu1",
          "point": [44.4268, 26.1025]
          },
          {
          "name": "uwu2",
          "point": [44.4268, 26.1525]
          },
          {
          "name": "uwu3",
          "point": [44.4768, 26.1525]
          },     
          {
          "name": "uwu4",
          "point": [44.4768, 26.1025]
          },      
        ]
    });
});


const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
