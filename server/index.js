const express = require('express');

const app = express();
const inventory = require('../data/mockpagedetail');
const db = require('../data/index')

db.connect()

db.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

db.end();

const server = app.listen(3026, () => console.log('Inventory service listening on port 3026!'));

module.exports = server;