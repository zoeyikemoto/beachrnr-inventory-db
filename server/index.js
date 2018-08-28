const express = require('express');

const app = express();
const inventory = require('../data/mockpagedetail');
const db = require('../data/index');
const testListing = require('./testlisting');

db.createListing(testListing, ()=> {return 1;});

db.deleteListing(1, ()=> {return 1;});

db.fetchListing(2, ()=> {return 1;});

db.connection.end();

const server = app.listen(3026, () => console.log('Inventory service listening on port 3026!'));

module.exports = server;