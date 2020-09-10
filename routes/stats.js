// const express = require("express");
// const router = express.Router();

// router.get("/stats", (req, res) => {
//   res.send("hello world");
// });

// module.exports = router;
const path = require("path")

module.exports = app => {
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })
};
