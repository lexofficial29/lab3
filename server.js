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

app.get('/api', (req, res) => {
  res.json(
    {
        "message": "Api data example",
        "location": {
          "name": "Location 1",
          "LAT/LONG": "BLA/BLA"
        },
        "listaDeLocatii": ["Locatie 1", "Locatie 2", "Locatie 3"]
    });
});

const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
