import React, { useState } from "react";
import { useEffect } from "react";
import yellow from "../assets/yellow.jpg";
import { useCreateCrimeReportMutation } from "../api/crimeReportApi";
import { useDispatch } from "react-redux";
import { reset } from "../features/crimeReportSlice";

const CrimeReport = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  const dispatch = useDispatch();
  const [createCrimeReport] = useCreateCrimeReportMutation();

  const [formData, setFormData] = useState({
    reportDate: "",
    reportTime: "",
    incidentDate: "",
    incidentTime: "",
    position: "",
    firstName: "",
    middleName: "",
    lastName: "",
    location: "",
    details: "",
    suspectDetails: "",
    arrestDetails: "",
    suspectFirstName: "",
    suspectLastName: "",
    contactInfo: "",
    mediaFile: null,
    certified: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object for file upload
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "mediaFile" && formData[key]) {
        formDataToSend.append(key, formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await createCrimeReport(formDataToSend).unwrap();
      alert(response.message || "Report submitted successfully!");
      dispatch(reset()); // Reset state
      setFormData({ ...formData, mediaFile: null }); // Clear form
    } catch (error) {
      console.error("Error submitting report:", error);
      if (typeof error.data === "string" && error.data.startsWith("<!DOCTYPE html>")) {
        alert("Failed to submit report due to a server error.");
      } else {
        alert("Failed to submit report. Please try again.");
      }
    }
  };

  return (
    <div
      className="min-h-screen pt-28 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${yellow})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl w-full space-y-8 p-8 rounded-lg shadow-inner transform transition-all duration-500 backdrop-blur-sm bg-white/5 text-white mt-18">
        <h2 className="text-2xl font-bold text-center">
          Create Crime and Incident Report
        </h2>
        <p className="text-sm text-white text-center mb-4">
          To report an incident, please provide the following information.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Report Date and Time */}
          <div>
            <label className="block text-white">Report date and time</label>
            <input
              type="date"
              name="reportDate"
              value={formData.reportDate}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 text-black"
              required
            />
            <input
              type="time"
              name="reportTime"
              value={formData.reportTime}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 text-black"
              required
            />
          </div>

          {/* Incident Date and Time */}
          <div>
            <label className="block text-white">
              Date and time when incident occurred
            </label>
            <input
              type="date"
              name="incidentDate"
              value={formData.incidentDate}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 text-black"
              required
            />
            <input
              type="time"
              name="incidentTime"
              value={formData.incidentTime}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 text-black"
              required
            />
          </div>

          {/* Incident Report Issued By */}
          <div>
            <label className="block text-white">
              Incident report issued by
            </label>
            <div className="grid grid-cols-4 gap-2">
              <input
                type="text"
                name="position"
                placeholder="Position"
                value={formData.position}
                onChange={handleChange}
                className="border p-2 rounded text-black"
                required
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 rounded text-black"
                required
              />
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                value={formData.middleName}
                onChange={handleChange}
                className="border p-2 rounded text-black"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-2 rounded text-black"
                required
              />
            </div>
          </div>

          {/* Incident Location */}
          <div>
            <label className="block text-white">Incident Location</label>
            <textarea
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-2 rounded text-black"
              required
              placeholder="Please provide specific location details"
            ></textarea>
          </div>

          {/* Incident Details */}
          <div>
            <label className="block text-white">Incident details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="w-full border p-2 rounded text-black"
              required
              placeholder="Incident details"
            ></textarea>
          </div>

          {/* Suspect Details */}
          <div>
            <label className="block text-white">
              Was the suspect wanted or had charges?
            </label>
            <textarea
              name="suspectDetails"
              value={formData.suspectDetails}
              onChange={handleChange}
              className="w-full border p-2 rounded text-black"
              placeholder="Provide details"
            ></textarea>
          </div>

          {/* Arrest Details */}
          <div>
            <label className="block text-white">
              Has anyone been arrested related to the incident?
            </label>
            <textarea
              name="arrestDetails"
              value={formData.arrestDetails}
              onChange={handleChange}
              className="w-full border p-2 rounded text-black"
              placeholder="Provide details"
            ></textarea>
          </div>

          {/* Suspect's Full Name */}
          <div>
            <label className="block text-white">Suspect's Full Name</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="suspectFirstName"
                placeholder="First Name"
                value={formData.suspectFirstName}
                onChange={handleChange}
                className="border p-2 rounded text-black"
              />
              <input
                type="text"
                name="suspectLastName"
                placeholder="Last Name"
                value={formData.suspectLastName}
                onChange={handleChange}
                className="border p-2 rounded text-black"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <label className="block text-white">Contact Information</label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="w-full border p-2 rounded text-black"
              placeholder="Email, phone, or Facebook link"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-white">Upload Media Files</label>
            <input
              type="file"
              name="mediaFile"
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <small className=" text-white">
              Images up to 10MB, max 10 files. Videos up to 256MB, max 1 file.
            </small>
          </div>

          {/* Certification Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="certified"
              checked={formData.certified}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label className="text-white">
              I certify that the above information is true and correct.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 shadow-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrimeReport;
