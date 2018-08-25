const mysql = require('mysql');
const queries = require('./queries');

var connection = mysql.createConnection({
  host: "localhost",
  user: "giraffe",
  password: "student",
  database: "inventory",
  multipleStatements: true
});


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

connection.query(queries.createDB());
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
module.exports.connection = connection;

