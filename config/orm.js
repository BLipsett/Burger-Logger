let connection = require("./connection.js");

// ORM
// =============================================================

let tableName = "burgers";

let orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  getBurgers: function(callback) {
    let s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {

      callback(result);

    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.

  deleteBurger: function(id, callback) {

    let s = "DELETE FROM " + tableName + " WHERE id=?";

    connection.query(s, [id], function(err, result) {

      callback(result);
    });

  },

  addBurger: function(burger, callback) {
    let s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
    burger.complete = burger.complete || 0;
    connection.query(s, [
      burger.text, burger.complete
    ], function(err, result) {

      callback(result);

    });
  },

  editBurger: function(burger, callback) {
    let s = "UPDATE " + tableName + " SET text=? WHERE id=?";

    connection.query(s, [
      burger.text, burger.id
    ], function(err, result) {

      callback(result);

    });
  }

};

module.exports = orm;
