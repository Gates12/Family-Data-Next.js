// pages/index.js
import { useState } from "react";
import { FaMale, FaFemale, FaUser, FaArrowRight } from "react-icons/fa";
import FamilyForm from "../components/FamilyForm";
import ConfirmationPage from "../components/ConfirmationPage";
import CitySelection from "../components/CitySelection";
import MedicalHistory from "../components/MedicalHistory";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: "Male",
    selectedMembers: ["Self"],
    name: "",
    age: "",
    city: "",
    medicalHistory: [],
    members: []
  });

  const toggleMember = (member) => {
    setFormData((prev) => ({
      ...prev,
      selectedMembers: prev.selectedMembers.includes(member)
        ? prev.selectedMembers.filter((m) => m !== member)
        : [...prev.selectedMembers, member]
    }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg transition ease-in-out duration-300">
        <div className="text-center mb-4">
          <p className="text-gray-600">Step {currentStep} of 5</p>
        </div>

        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Find the best plan for your family</h2>

            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setFormData({ ...formData, gender: "Male" })}
                className={`px-4 py-2 rounded flex items-center space-x-2 transition ease-in-out duration-200 ${
                  formData.gender === "Male" ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <FaMale /> <span>Male</span>
              </button>
              <button
                onClick={() => setFormData({ ...formData, gender: "Female" })}
                className={`px-4 py-2 rounded flex items-center space-x-2 transition ease-in-out duration-200 ${
                  formData.gender === "Female" ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <FaFemale /> <span>Female</span>
              </button>
            </div>

            <h3 className="text-lg font-medium">Select members you want to insure</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Self", "Wife", "Son", "Daughter", "Father", "Mother"].map((member) => (
                <button
                  key={member}
                  onClick={() => toggleMember(member)}
                  className={`p-4 border rounded flex items-center space-x-2 transition ease-in-out duration-200 ${
                    formData.selectedMembers.includes(member)
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100 focus:ring-2 focus:ring-black"
                  }`}
                >
                  <FaUser /> <span>{member}</span>
                </button>
              ))}
            </div>

            <button
              onClick={nextStep}
              className="w-full bg-black text-white py-3 rounded mt-4 flex items-center justify-center space-x-2 transition ease-in-out duration-200 hover:bg-gray-800"
            >
              <span>Continue</span> <FaArrowRight />
            </button>

            <p className="text-xs text-center text-gray-500">
  By clicking on &quot;Continue&quot;, you agree to our Privacy Policy, Terms of Use &amp; Disclaimer.
</p>

          </div>
        )}

        {currentStep === 2 && (
          <FamilyForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {currentStep === 3 && (
          <CitySelection
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {currentStep === 4 && (
          <MedicalHistory
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {currentStep === 5 && (
          <ConfirmationPage
            formData={formData}
            prevStep={prevStep}
          />
        )}
      </div>
    </div>
  );
}
