const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const BooksRouter = require("./controller/books");
const usersRouter = require("./controller/users");
const loginRouter = require("./controller/login");

const app = express();
const port = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("error", error.message);
  });

/* Middleware */

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/books", BooksRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.listen(port, () => {
  console.log(
    `Server listening at port ${port} at http://localhost:3001/api/books`
  );
});
