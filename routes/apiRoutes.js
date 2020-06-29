const router = require("express").Router();
const orm = require("../config/orm.js");

const connection = require("../db/dbConnection");

router.post("/burgers", (req, res) => {
  orm.addBurger(req.body.burger);
  res.sendStatus(200);
});

router.put("/burgers/:id", (req, res) => {
  orm.devourBurger(req.params.id);
  return res.sendStatus(200);
});
module.exports = router;
