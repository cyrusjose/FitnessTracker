// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("hello world");
// });

// module.exports = router;

const path = require("path")

module.exports = app => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
};