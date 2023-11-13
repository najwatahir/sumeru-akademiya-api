const { Router } = require("express");
const UserController = require("../controllers/user.controller");
const { auth, authorizeAdmin } = require("../middlewares/auth");

const router = Router();

router.get("/user", authorizeAdmin, UserController.getUsers);
router.post("/user", UserController.addUser);
router.post("/login", UserController.login);

module.exports = router;
