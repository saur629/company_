const Service = require("../models/serviceModels");

const createService = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required"
      });
    }

    const service = await Service.create({
      title,
      description,
      image
    });

    res.status(201).json({
      message: "Service created successfully",
      service
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message
    });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });

    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message
    });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message
    });
  }
};

const updateService = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({
      message: "Service updated successfully",
      updatedService
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message
    });
  }
};



const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message
    });
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService
};
