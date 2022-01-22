'use strict';

const express = require('express');
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

app.post('/candidates', function(req, res) {
  // ...
});

app.get('/candidates/search', function(req, res) {
  // ...
});

app.listen(process.env.HTTP_PORT || 3000);
