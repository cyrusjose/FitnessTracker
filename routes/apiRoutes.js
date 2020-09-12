const path = require("path");
const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");


router.get("/api/workouts", (req,res) => {
  Exercise.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;

// module.exports = app => {
//   app.get("/exercise", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
//   });
// };
