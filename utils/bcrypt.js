const { hashSync, compareSync } = require("bcrypt");

const salt = 10;

// encryption to data/password
function generateHash(password) {
  return hashSync(password, 10);
}

// comparing plain password and encryption
function decodeHash(password, hash) {
  return compareSync(password, hash);
}

module.exports = { generateHash, decodeHash };
