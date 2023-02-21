import express, { Request, Response, NextFunction } from "express";

const createError = require("http-errors");
const logger = require("morgan");
const path = require("path");
const env = require("dotenv");

/** router */
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const step1 = require("./routes/step1");
const step2 = require("./routes/step2");

const app = express();

// view engine setup
env.config();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT;

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/step", step1, step2);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404)); // 개발서버 테스트용
  // res.status(200).json({ susccess: false, message: "not found", code: 1000 });
});

module.exports = app;
