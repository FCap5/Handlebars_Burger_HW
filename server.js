const express = require("express");
const app = express();
const mysql = require("mysql");
const exphbs = require("express-handlebars");
const connection = require("./db/dbConnection.js");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

connection.connect((err) => {
  if (err) throw err;
  console.log("db connected");
});

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
