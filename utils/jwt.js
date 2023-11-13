const jwt = require("jsonwebtoken");

const secret = "abcde";

function generateToken(payload) {
  return jwt.sign(payload, secret, { expiresIn: "12h" });
}

function decodeToken(token) {
  try {
    const decode = jwt.verify(token, secret);
    return decode;
  } catch (error) {
    // Token is invalid (expired, tampered, etc.)
    console.error("Error decoding token:", error);
    return null;
  }
}

module.exports = { decodeToken, generateToken };
