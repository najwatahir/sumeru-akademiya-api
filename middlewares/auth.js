const { decodeToken } = require("../utils/jwt");
const { PrismaClient } = require("@prisma/client");

function auth(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    req.loggedUser = decodeToken(token);
    next();
  } else {
    res.status(400).json({ message: "invalid auth" });
  }
}

async function authorizeAdmin(req, res, next) {
  if (req.loggedUser) {
    const user = req.loggedUser;

    //1 role is admin
    if (user.role === 1) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden access" });
    }
  } else {
    res.status(403).json({ message: "Forbidden access" });
  }
}

module.exports = { auth, authorizeAdmin };
