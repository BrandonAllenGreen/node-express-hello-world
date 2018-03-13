'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/time', (req, res) => {
  let date = new Date();
  let dateISO = date.toISOString();
  res.send(dateISO);
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
