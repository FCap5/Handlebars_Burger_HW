const router = require("express").Router();

// we require the dbconnection file so that we can access the connection oobject that we established
// this allows us to call "connection.query(...)" anyhere the connection has been required.
const connection = require("../db/dbConnection");

// router in this case is behaving the same as it has throughout the route tree, however we are now at the endpoints that will bit hit with browser requests
// instead of calling "router.USE(...)" we will be calling "router.get(..)", replacing "get" with whichever http verb is relevant (post, delete, etc.)
// router.post("/api/burgers", (req, res) => {
//   connection.query(
//     "INSERT INTO burgers (burger) VALUES (?)",
//     [req.params],
//     (err, result) => {
//       if (err) throw err;
//       console.log(result);
//     }
//   );
// });

module.exports = router;
