// components/MedicalHistory.js
export default function MedicalHistory({ formData, setFormData, nextStep, prevStep }) {
    const conditions = [
      "Diabetes", "Blood Pressure", "Heart Disease", "Any Surgery",
      "Thyroid", "Asthma", "Other Disease", "None of These"
    ];
  
    const toggleCondition = (condition) => {
      setFormData((prev) => ({
        ...prev,
        medicalHistory: prev.medicalHistory.includes(condition)
          ? prev.medicalHistory.filter((c) => c !== condition)
          : [...prev.medicalHistory, condition]
      }));
    };
  
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Medical History</h2>
        <p className="text-center text-gray-500">
          Do any member(s) have any existing illnesses for which they take regular medication?
        </p>
  
        <div className="grid grid-cols-2 gap-4">
          {conditions.map((condition) => (
            <button
              key={condition}
              onClick={() => toggleCondition(condition)}
              className={`p-4 border rounded ${
                formData.medicalHistory.includes(condition)
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {condition}
            </button>
          ))}
        </div>
  
        <button
          onClick={nextStep}
          className="w-full bg-black text-white py-3 rounded"
        >
          Continue →
        </button>
  
        <button
          onClick={prevStep}
          className="w-full bg-gray-500 text-white py-3 rounded mt-2"
        >
          Back
        </button>
      </div>
    );
  }
  