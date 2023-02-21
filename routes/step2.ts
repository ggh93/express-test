import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", function (req: Request, res: Response, n: NextFunction) {
  console.log("step2");
  res.status(200).json({
    success: true,
    message: "test",
  });
});

module.exports = router;
