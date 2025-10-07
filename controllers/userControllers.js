const UserModel = require("../models/userModels");


exports.SignupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exist = await UserModel.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new UserModel({name , email ,password})
    await user.save()

    res.status(201).json({ message: "Signup successful", user });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
};


exports.LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }


    res.status(200).json({
      message: "Login successful",
      user: { name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
};
