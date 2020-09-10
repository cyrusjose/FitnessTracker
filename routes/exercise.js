// const express = require("express");
// const router = express.Router();
// const Exercise = require('../models/exercise')

// router.get("/exercise", (req, res) => {
//   res.send("hello world");
// });

const path = require("path")

module.exports = app => {
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })
};