var connection = require('./connection.js');


var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(table, data, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    console.log(queryString);
    connection.query(queryString, [table, data], function(err, result) {
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(table, data, cb) {
    var queryString = "UPDATE ?? SET ?";
    connection.query(queryString, [table, data], function(err, result) {
      console.log(result);
      cb(result);
    });
  }
};

module.exports = orm;
