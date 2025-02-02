// components/ConfirmationPage.js
import { useState } from "react";
import { FaCheckCircle, FaMapMarkerAlt, FaHeartbeat } from "react-icons/fa";

export default function ConfirmationPage({ formData, prevStep }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">{submitted ? "Submission Successful!" : "Confirmation"}</h2>

      {submitted ? (
        <div className="text-center">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-700">Thank you for submitting your details!</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <p className="text-lg font-medium text-gray-800 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-red-500" /> City:
            </p>
            <p className="text-gray-600 mb-2">{formData.city || "N/A"}</p>
            <p className="text-lg font-medium text-gray-800 flex items-center">
              <FaHeartbeat className="mr-2 text-red-400" /> Medical History:
            </p>
            <p className="text-gray-600">{formData.medicalHistory.length > 0 ? formData.medicalHistory.join(", ") : "None"}</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800">Family Members:</h3>
          <div className="space-y-4">
            {formData.members.map((member, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-800 font-medium">Relation: <span className="text-gray-600">{member.relation}</span></p>
                <p className="text-gray-800 font-medium">Age: <span className="text-gray-600">{member.age}</span></p>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              className="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600 transition ease-in-out duration-200"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition ease-in-out duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
