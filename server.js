const jsonServer = require('json-server');
const app = jsonServer.create();
const express = require('express');
const path = require('path');
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

app.use(middlewares);
app.use('/db', middlewares, router);
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function () {
  console.log('Server started.......');
});
