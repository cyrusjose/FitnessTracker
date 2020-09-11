// check to see if we're running in the production environment. We don't wanna load in this environment variable unless we're in our development environment.
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const exerciseRouter = require("./routes/exercise");
const indexRouter = require("./routes/index");
const statsRouter = require("./routes/stats");

const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to mongoose"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/exercise")(app);
// require("./routes/index")(app);
// require("./routes/stats")(app);

app.use("/", indexRouter);
app.use("/stats", statsRouter);
app.use("/exercise", exerciseRouter);

app.listen(PORT, () => {
  console.log(`App listening on port: http://localhost:${PORT}`);
});
