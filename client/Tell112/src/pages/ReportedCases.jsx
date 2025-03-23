import React from "react";
import {reportedCases} from "./cases";
import yellow from "../assets/yellow.jpg";


// const reportedCases = [
//   {
//     reportDate: "2023-10-02",
//     reportTime: "09:45",
//     incidentDate: "2023-10-02",
//     incidentTime: "08:00",
//     position: "Detective",
//     firstName: "Jane",
//     middleName: "B.",
//     lastName: "Smith",
//     location: "Downtown, Los Angeles",
//     details: "A robbery occurred at a jewelry store.",
//     suspectDetails: "Suspect was wearing a black mask and gloves.",
//     arrestDetails: "One suspect arrested.",
//     suspectFirstName: "Michael",
//     suspectLastName: "Brown",
//     contactInfo: "jane.smith@example.com",
//     mediaFile: "file://path/to/media/file2.jpg",
//     certified: true,
//   }
// ];

const ReportedCases = ({ cases = reportedCases }) => {
  return (
    <div
  className="min-h-screen pt-28 pb-10 flex flex-col items-center justify-start bg-cover bg-center"
  style={{
    backgroundImage: `url(${yellow})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="max-w-6xl w-full space-y-6 p-8 rounded-lg shadow-xl backdrop-blur-md bg-white/10 text-white">
    <h2 className="text-3xl font-bold text-center">All Reported Cases</h2>
    <p className="text-sm text-center mb-4">
      Below are the details of all incidents reported.
    </p>

    {/* List of Reported Cases */}
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-6" // Responsive grid layout
    >
      {cases.length > 0 ? (
        cases.map((caseItem, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-black/30 hover:scale-100 transform"
          >
            <h3 className="text-xl font-semibold text-amber-400">
              Case #{index + 1}
            </h3>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="font-medium text-white">Report Date:</span>{" "}
                {caseItem.reportDate} at {caseItem.reportTime}
              </p>
              <p>
                <span className="font-medium text-white">Incident Date:</span>{" "}
                {caseItem.incidentDate} at {caseItem.incidentTime}
              </p>
              <p>
                <span className="font-medium text-white">Reported By:</span>{" "}
                {caseItem.firstName}{" "}
                {caseItem.middleName && `${caseItem.middleName} `}
                {caseItem.lastName} ({caseItem.position})
              </p>
              <p>
                <span className="font-medium text-white">Location:</span>{" "}
                {caseItem.location}
              </p>
              <p>
                <span className="font-medium text-white">Details:</span>{" "}
                {caseItem.details}
              </p>
              {caseItem.suspectDetails && (
                <p>
                  <span className="font-medium text-white">
                    Suspect Details:
                  </span>{" "}
                  {caseItem.suspectDetails}
                </p>
              )}
              {caseItem.arrestDetails && (
                <p>
                  <span className="font-medium text-white">
                    Arrest Details:
                  </span>{" "}
                  {caseItem.arrestDetails}
                </p>
              )}
              {caseItem.suspectFirstName || caseItem.suspectLastName ? (
                <p>
                  <span className="font-medium text-white">Suspect Name:</span>{" "}
                  {caseItem.suspectFirstName || "Unknown"}{" "}
                  {caseItem.suspectLastName || ""}
                </p>
              ) : null}
              <p>
                <span className="font-medium text-white">Contact Info:</span>{" "}
                {caseItem.contactInfo || "Not Provided"}
              </p>
              {caseItem.mediaFile && (
                <p>
                  <span className="font-medium text-white">Media File:</span>{" "}
                  <a
                    href={caseItem.mediaFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Media
                  </a>
                </p>
              )}
              <p>
                <span className="font-medium text-white">Certified:</span>{" "}
                {caseItem.certified ? "Yes" : "No"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400 col-span-full">
          No reported cases found.
        </p>
      )}
    </div>
  </div>
</div>
  );
};

export default ReportedCases;
