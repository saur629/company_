const Contact = require("../models/contactModel");
const UserModel = require("../models/userModels");

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

const getAllContacts = async (req, res)  => {
  try{
     const contacts = await Contact.find();
     res.status(200).json(contacts);
  }catch (err) {
    res.status(500).json({ error: "Failed to catch Error", details: err.message});
  }
};

const getContactId = async (req, res) => {
    try{
      const contact = await Contact.findById(req.params.id);
      if (!contact) return res.status(404).json({error: "Contact not Found",});
      res.status(400).json(contact);

    }catch (err){
      res.status(500).json({ error: "Fetching Error Contact", details: err.message });
    }


};

const updateContact = async (req, res) => {
  try{
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body,{
      new: true,
      ruleValidators: true,
    });

    if (!updated) return res.status(404).json({message: "Contact not found"});
    res.staus(200).json({message: "Contact updated successfully", updated });
  }catch (err){
    res.status(500).json({error: "Error Updating Contact", details: err.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting contact", details: err.message });
  }
};

module.exports = { submitContact, getAllContacts, updateContact,deleteContact,getContactId };
