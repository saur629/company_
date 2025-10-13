const crypto = require("crypto");

const hashPassword = (password) => {
  const hashpass = crypto.createHash("md5").update(password).digest("hex");

  return hashpass;
};

const comparePassword = (password, hashpassword) => {
  const hashPass = hashPassword(password);
  return hashPass === hashpassword;
};

module.exports = { hashPassword, comparePassword };
