// check to see if we're running in the production environment. We don't wanna load in this environment variable unless we're in our development environment.
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App listening on port: http://localhost:${PORT}`);
});
