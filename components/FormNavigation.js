// components/FormNavigation.js
export default function FormNavigation({ nextStep, prevStep, isLastStep }) {
    return (
      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className={`${
            isLastStep ? "bg-green-500" : "bg-blue-500"
          } text-white px-4 py-2 rounded`}
        >
          {isLastStep ? "Submit" : "Continue"}
        </button>
      </div>
    );
  }
  