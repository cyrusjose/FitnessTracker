const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");

router.get("/workouts", (req, res) => {
  Exercise.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/workouts", (req, res) => {
  Exercise.create({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Exercise.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/workout/range", (req, res) => {
  Exercise.create({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports = router;
