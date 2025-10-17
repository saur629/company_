const crypto = require("crypto");

const hashPassword = (password) => {
  return crypto.createHash("md5").update(password).digest("hex");
};


const comparePassword = (plainPassword, hashedPassword) => {
  const hash = hashPassword(plainPassword);
  return hash === hashedPassword;
};

module.exports = { hashPassword, comparePassword };

