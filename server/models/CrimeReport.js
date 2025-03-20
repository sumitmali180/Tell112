const mongoose = require("mongoose");

const CrimeReportSchema = new mongoose.Schema(
  {
    reportDate: { type: String, required: true },
    reportTime: { type: String, required: true },
    incidentDate: { type: String, required: true },
    incidentTime: { type: String, required: true },
    position: { type: String, required: true },
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    location: { type: String, required: true },
    details: { type: String, required: true },
    suspectDetails: { type: String },
    arrestDetails: { type: String },
    suspectFirstName: { type: String },
    suspectLastName: { type: String },
    contactInfo: { type: String },
    mediaFile: { type: String }, // Store file path or URL
    certified: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CrimeReport", CrimeReportSchema);