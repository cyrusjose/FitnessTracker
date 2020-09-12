const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    exercises: [
      {
        name: {
          type: String,
          trim: true,
          required: true
        },
        type: {
          type: String,
          trim: true,
          required: true
        },
        duration: {
          type: Number,
          required: true
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ],
    day: {
      type: Date,
      default: () => new Date()
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

exerciseSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
