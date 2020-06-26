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

// by requiring the whole routes folder, we are able to de-couple the server.js file from the routing, allowing us to make modifications to our routing structure without having to modify our server.js file.  When requiring an entire directory, you must put an index.js file in the root of that directory to instruct express how to direct requests further up the routing tree.
const routes = require("./routes");

// once the route directory has been required, app.use takes two arguments, the path fragment and the directory that will be used after hitting that portion of the route.  In this case, if the user hits the base url, express will then look to the index file in the routes directory to direct traffic beyond that base url.
app.use("*", routes);

connection.connect((err) => {
  if (err) throw err;
  console.log("db connected");
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("*", (req, res) => {
  connection.query(
    "SELECT burger FROM burgers WHERE devoured = 0",
    (err, data) => {
      if (err) throw err;
      res.render("index", { burgers: data });
    }
  );
});

app.post("/api/burgers", (req, res) => {
  connection.query(
    "INSERT INTO burgers (burger) VALUES (?)",
    [req.body.burger],
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.sendStatus(200);
    }
  );
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
