let express = require('express');

let proxyRegister = require('./proxyRegister');

let app = express();
let host = 'localhost';
let port = 10000 + Math.round(Math.random() * 50000);

app.get('/', (req, res) => {
  res.redirect('/hello/world');
});

app.get('/hello/:whom', (req, res) => {
  res.send(`Hello, ${req.params.whom}.\n`);
});

app.listen(port, host);
console.log(`Listening on ${host}:${port}.`);

proxyRegister(port);
