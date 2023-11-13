const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { Router } = require("express");
const studentRouter = require("../routers/student.router");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Sumeru Akademiya" });
});

class StudentController {
  static async getStudents(req, res) {
    try {
      const students = await prisma.student.findMany({
        include: {
          darshan: {
            select: {
              name: true,
            },
          },
        },
      });

      res.status(200).json({ data: students });
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async addStudent(req, res) {
    const result = await prisma.student.create({
      data: {
        name: req.body.name,
        vision: req.body.vision,
        darshanId: req.body.darshanId,
      },
    });
    console.log(result);
    res.json({ data: result });
  }

  // update student
  static async updateStudent(req, res) {
    const result = await prisma.student.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: req.body.name,
        vision: req.body.vision,
        darshan: req.body.darshan,
      },
    });
    res.json(result);
  }

  static async deleteStudent(req, res) {
    try {
      const studentId = Number(req.params.id);

      if (isNaN(studentId)) {
        return res.status(400).json({ error: "Invalid student ID" });
      }

      const deletedStudent = await prisma.student.delete({
        where: {
          id: studentId,
        },
      });

      if (!deletedStudent) {
        return res.status(404).json({ error: "Student not found" });
      }

      res.json({ message: "Student data deleted successfully" });
    } catch (error) {
      console.error("Error deleting student:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = StudentController;
