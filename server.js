// check to see if we're running in the production environment. We don't wanna load in this environment variable unless we're in our development environment.
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to mongoose"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(apiRouter);
app.use(htmlRouter);

app.listen(PORT, () => {
  console.log(`App listening on port: http://localhost:${PORT}`);
});
