const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateHash, decodeHash } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");
const prisma = new PrismaClient();

class UserController {
  static async getUsers(req, res) {
    try {
      const result = await prisma.user.findMany({
        select: {
          id: true,
          username: true,
          role: true,
        },
      });
      res.status(200).json({ data: result });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async addUser(req, res) {
    try {
      const { username, password, role } = req.body;

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Check if the user already exists
      const existingUser = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User with this username already exists" });
      }

      // Create a new user
      const result = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
          role: Number(role),
        },
      });

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error adding user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;

      // Find the user by username
      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (!user) {
        return res.status(401).json({ message: "Invalid username/password" });
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid username/password" });
      } else {
        const { id, username, role } = user;
        res.status(200).json({
          token: generateToken({
            id,
            username,
            role,
          }),
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = UserController;
