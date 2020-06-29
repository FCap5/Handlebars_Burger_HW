const connection = require("../db/dbConnection.js");

const orm = {
  addBurger: (newBurger) => {
    connection.query(
      "INSERT INTO burgers (burger) VALUES (?)",
      [newBurger],
      (err, result) => {
        if (err) throw err;
      }
    );
  },

  devourBurger: (burgerId) => {
    connection.query(
      "UPDATE burgers SET devoured = 1 WHERE id = ?",
      [burgerId],
      (err, result) => {
        if (err) throw err;
      }
    );
  },
};

module.exports = orm;
