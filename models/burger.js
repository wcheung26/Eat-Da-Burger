var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(data, cb) {
    orm.insertOne("burgers", data, function(res) {
      cb(res);
    });
  },
  updateOne: function(data, condition, cb) {
    orm.updateOne("burgers", data, condition, function(res) {
      cb(res);
    });
  },
};

module.exports = burger;
