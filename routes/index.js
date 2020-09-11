const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  //   res.send("hello world");
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router;

// module.exports = app => {
//     app.get("/", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/index.html"))
//     })
// };
