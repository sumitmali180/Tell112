const CrimeReport = require("../models/CrimeReport");

// Create a new crime report
exports.createCrimeReport = async (req, res) => {
  try {
    const { body, file } = req;

    // Add file path to the request body if a file was uploaded
    const mediaFile = file ? file.path : null;

    const newReport = new CrimeReport({
      ...body,
      mediaFile,
    });

    await newReport.save();
    res.status(201).json({ message: "Crime report created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all crime reports
exports.getAllCrimeReports = async (req, res) => {
  try {
    const reports = await CrimeReport.find();
    res.status(200).json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};