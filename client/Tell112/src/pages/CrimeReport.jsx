import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { useSelector } from "react-redux"; // To access Redux state
import yellow from "../assets/yellow.jpg";
import { useCreateCrimeReportMutation } from "../api/crimeReportApi";
import { useDispatch } from "react-redux";
import { reset } from "../features/crimeReportSlice";
import Preloader2 from "../loader/Preloader2";

const CrimeReport = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth); // Access authentication token
  const [createCrimeReport, { isLoading }] = useCreateCrimeReportMutation();

  // Redirect to login if the user is not authenticated
  useEffect(() => {
    if (!token) {
      alert("Please log in to submit a crime report.");
      navigate("/login");
    }
  }, [token, navigate]);

  const initialFields = {
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
  };

  const [formData, setFormData] = useState(initialFields);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      setFormData(initialFields);
    } catch (error) {
      console.error("Error submitting report:", error);
      alert("Failed to submit report. Please try again.");
    }
  };

  // If the user is not logged in, render nothing or a loading spinner
  if (!token) {
    return null; // Or show a loading spinner
  }

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
      <div className="max-w-4xl w-full space-y-6 p-8 mb-10 rounded-lg shadow-xl backdrop-blur-md bg-white/10 text-white">
        <h2 className="text-3xl font-bold text-center">
          Create Crime and Incident Report
        </h2>
        <p className="text-sm text-center mb-4">
          To report an incident, please provide the following information.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Report Date and Time */}
          <div>
            <label className="block text-white font-medium mb-1">
              Report Date & Time
            </label>
            <div className="flex gap-4">
              <input
                type="date"
                name="reportDate"
                value={formData.reportDate}
                onChange={handleChange}
                className="w-1/2 p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
                required
              />
              <input
                type="time"
                name="reportTime"
                value={formData.reportTime}
                onChange={handleChange}
                className="w-1/2 p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
                required
              />
            </div>
          </div>
          {/* Incident Date and Time */}
          <div>
            <label className="block text-white font-medium mb-1">
              Incident Date & Time
            </label>
            <div className="flex gap-4">
              <input
                type="date"
                name="incidentDate"
                value={formData.incidentDate}
                onChange={handleChange}
                className="w-1/2 p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
                required
              />
              <input
                type="time"
                name="incidentTime"
                value={formData.incidentTime}
                onChange={handleChange}
                className="w-1/2 p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
                required
              />
            </div>
          </div>
          {/* Incident Report Issued By */}
          <div>
            <label className="block text-white font-medium mb-1">
              Incident Report Issued By
            </label>
            <div className="grid grid-cols-4 gap-2">
              <input
                type="text"
                name="position"
                placeholder="Position"
                value={formData.position}
                onChange={handleChange}
                className="border p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
                required
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
                required
              />
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                value={formData.middleName}
                onChange={handleChange}
                className="border p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
                required
              />
            </div>
          </div>
          {/* Incident Location */}
          <div>
            <label className="block text-white font-medium mb-1">
              Incident Location
            </label>
            <textarea
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all resize-none"
              rows="3"
              placeholder="Please provide specific location details"
              required
            ></textarea>
          </div>
          {/* Incident Details */}
          <div>
            <label className="block text-white font-medium mb-1">
              Incident Details
            </label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all resize-none"
              rows="4"
              placeholder="Describe the incident in detail"
              required
            ></textarea>
          </div>
          {/* Suspect Details */}
          <div>
            <label className="block text-white font-medium mb-1">
              Was the suspect wanted or had charges?
            </label>
            <textarea
              name="suspectDetails"
              value={formData.suspectDetails}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all resize-none"
              rows="3"
              placeholder="Provide details about the suspect"
            ></textarea>
          </div>
          {/* Arrest Details */}
          <div>
            <label className="block text-white font-medium mb-1">
              Has anyone been arrested related to the incident?
            </label>
            <textarea
              name="arrestDetails"
              value={formData.arrestDetails}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all resize-none"
              rows="3"
              placeholder="Provide arrest-related details"
            ></textarea>
          </div>
          {/* Suspect's Full Name */}
          <div>
            <label className="block text-white font-medium mb-1">
              Suspect's Full Name
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="suspectFirstName"
                placeholder="First Name"
                value={formData.suspectFirstName}
                onChange={handleChange}
                className="w-1/2 p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
              />
              <input
                type="text"
                name="suspectLastName"
                placeholder="Last Name"
                value={formData.suspectLastName}
                onChange={handleChange}
                className="w-1/2 p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
              />
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <label className="block text-white font-medium mb-1">
              Contact Information
            </label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
              placeholder="Email, phone, or Facebook link"
            />
          </div>
          {/* File Upload */}
          <div>
            <label className="block text-white font-medium mb-1">
              Upload Media Files
            </label>
            <input
              type="file"
              name="mediaFile"
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-all"
            />
            <small className="text-white">
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
            <label className="text-white font-medium">
              I certify that the above information is true and correct.
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full py-3 px-4 bg-gradient-to-r from-amber-300 to-yellow-400 text-black font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            {isLoading ? <Preloader2 /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrimeReport;