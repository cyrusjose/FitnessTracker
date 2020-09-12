const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");

// =========================== Main workout Page ===========================

router.get("/api/workouts", (req, res) => {
  Exercise.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Exercise.create({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

// =========================== Stats Page ===========================

router.get("/api/workouts/range", (req, res) => {
  Exercise.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts/range", (req, res) => {
  Exercise.create({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

// =========================== Update a workout ===========================

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Exercise.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
