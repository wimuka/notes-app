const jsonServer = require('json-server');
const app = jsonServer.create();
const express = require('express');
const path = require('path');
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const data = require('./db');

app.use(middlewares);
app.use(data, middlewares, router);

app.use(express.static('public'));
//Without this part fetching of villagers.json doesn't work (says no access for access-control-allow-origin)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.get('/notes', function (req, res, next) {
  res.send(data);
});
const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log('Server started.......');
});
