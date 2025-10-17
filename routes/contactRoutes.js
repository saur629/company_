const express = require("express");
const router = express.Router();
const { submitContact } = require("../controllers/contactController");
const upload = require("../functions/mediaFunc");

router.post("/", upload.single('avatar'), submitContact );

module.exports = router;
