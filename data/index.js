const mysql = require('mysql');
const queries = require('./queries');

var connection = mysql.createConnection({
  host: "localhost",
  user: "beachrnr",
  password: "giraffe",
  database: "inventory",
  multipleStatements: true
});
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "giraffe",
//   password: "student",
//   database: "inventory",
//   multipleStatements: true
// });


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

connection.query(queries.createDB());



module.exports.createListing = (listing, cb) => {
    connection.query('INSERT INTO listings SET ?', listing, (err, result, fields) => {
      err ? cb(err, null) : cb(null, result);
    });
};

module.exports.deleteListing = (listingId, cb) => {
    connection.query('DELETE FROM listings WHERE id = ?', listingId, (err, result, fields) => {
      err ? cb(err, null) : cb(null, result);
    });
};

module.exports.fetchListing = (listingId, cb) => {
    connection.query('SELECT * FROM listings WHERE id = ?', listingId, (err, result, fields) => {
      err ? cb(err, null) : Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row);
     });
    });
};

module.exports.connection = connection;