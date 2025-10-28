const express = require("express");
const router = express.Router();
const { submitContact, getAllContacts, getContactId, updateContact, deleteContact } = require("../controllers/contactController");
const upload = require("../functions/mediaFunc");

router.post("/", upload.single('avatar'), submitContact );
router.get("/", getAllContacts)
router.get("/:id", getContactId)
router.patch("/update", updateContact)
router.delete("/delete", deleteContact)

module.exports = router;
