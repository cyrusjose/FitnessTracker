const express = require("express");
const path = require("path")
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
  // res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;

// const path = require("path")

// module.exports = app => {
//     app.get("/stats", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/stats.html"))
//     })
// };
