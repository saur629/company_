const Contact = require("../models/contactModel");

const submitContact = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
     const file = req.file
     console.log("Uploaded file:", req.file);

       let avatarUrl = ''
      if (file) {
      avatarUrl = `/uploads/${file.originalname}`;
    }

   
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

  
    const contact = new Contact({ firstName, lastName, email, message, avatar:avatarUrl});
    await contact.save();

    res.status(201).json({ message: "Message submitted successfully", contact });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
};

module.exports = { submitContact };
