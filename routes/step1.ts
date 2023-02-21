import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  console.log("step1");
  res.status(200).json({ succeess: true });
  // next({});
});
// router.get("/", function (req, res, next: NextFunction) {
//   console.log("step1");
//   next();
// });

module.exports = router;
