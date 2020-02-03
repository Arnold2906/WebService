const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routeSistema = require("./routes/sistemaroute.js")  
const port = process.env.PORT || 8000;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/productos', routeSistema);


const server = app.listen(port, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
  });