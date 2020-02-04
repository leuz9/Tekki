const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/Tekki'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/tekki/index.html'));
});

// Listen on environment PORT variable else 3000
app.listen(process.env.PORT || 3000);

