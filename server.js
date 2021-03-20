const jsonServer = require('json-server');
const app = jsonServer.create();
const path = require('path');
const express = require('express');
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = process.env.PORT || 5000;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/', middlewares, router);
app.use(express.static('./db.json'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/client/build/index.html'));
});

app.listen(port, () => console.log(`Server started on port ${port}`));
