const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,             
  secure: false,          
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
   
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.error(" Mail transporter connection failed:", error);
  } else {
    console.log(" Mail transporter ready to send emails");
  }
});

module.exports ={ transporter }  ;