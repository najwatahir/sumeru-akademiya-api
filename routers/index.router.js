const { Router } = require("express");
const studentRouter = require("./student.router");
const userRouter = require("./user.router");

const router = Router();

router.use(studentRouter);
router.use(userRouter);

module.exports = router;
