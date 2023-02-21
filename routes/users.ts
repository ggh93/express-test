import express, { Request, Response, NextFunction } from "express";

class CustomError extends Error {
  code: any;
  // message: string;
  // statusCode: number;
}

const db = require("../mysql-db");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("respond with a resource");
});

/** 회원가입 */
router.post("/join", function (req: Request, res: Response, n: NextFunction) {
  const { id, password, name, email, phone } = req.body;
  try {
    db.query(
      "SELECT * FROM users WHERE id = ?",
      [id],
      function (error: CustomError) {
        // id가 같은 회원이 있는지 확인
        if (error) throw error;
        db.query(
          "INSERT INTO users (id, password,name,email,phone) VALUES(?,?,?,?,?)",
          [id, password, name, email, phone]
        );
      }
    );
    res.status(200).json({
      success: true,
      message: "회원가입이 완료되었습니다!",
      code: 200,
    });
  } catch (error) {
    console.log(error);
  }
  console.log("id ", id);
});

module.exports = router;
