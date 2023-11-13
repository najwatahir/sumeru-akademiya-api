const { Router } = require("express");
const StudentController = require("../controllers/student.controller");
const { auth, authorizeAdmin } = require("../middlewares/auth");

const router = Router();

router.use(auth);
router.get("/students", authorizeAdmin, StudentController.getStudents);
router.post("/students", authorizeAdmin, StudentController.addStudent);
router.put("/students/:id", authorizeAdmin, StudentController.updateStudent);
router.delete("/students/:id", authorizeAdmin, StudentController.deleteStudent);

module.exports = router;
