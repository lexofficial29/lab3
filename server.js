const express = require('express');
const http = require('http');

const app = express();
const PORT = 6969;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/client/pages/index.html")
});

app.get('/marius.jpg', (req, res) => {
  res.sendFile(__dirname + "/client/images/marius.jpg")
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
