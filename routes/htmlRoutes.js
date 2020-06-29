const router = require("express").Router();
const orm = require("../config/orm.js");

const connection = require("../db/dbConnection");

router.get("*", (req, res) => {
  connection.query("SELECT * FROM burgers", (err, burgers) => {
    if (err) throw err;
    const notEaten = burgers.filter((burger) => burger.devoured === 0);
    const eaten = burgers.filter((burger) => burger.devoured === 1);
    res.render("index", { burgers: notEaten, devoureds: eaten });
  });
});

module.exports = router;
