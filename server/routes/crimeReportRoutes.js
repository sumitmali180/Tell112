const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const {
  createCrimeReport,
  getAllCrimeReports,
} = require("../controllers/crimeReportController");

const router = express.Router();

// Create a new crime report
router.post("/", upload.single("mediaFile"), createCrimeReport);

// Get all crime reports
router.get("/", getAllCrimeReports);

module.exports = router;