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
    connection.query('INSERT INTO listings SET ?', listing, (err, results, fields) => {
      err ? cb(err, null) : cb(null, results);
    });
};

module.exports.deleteListing = (listingId, cb) => {
    connection.query('DELETE FROM listings WHERE id = ?', listingId, (err, results, fields) => {
      err ? cb(err, null) : cb(null, results);
    });
};

module.exports.connection = connection;