// components/CitySelection.js
export default function CitySelection({ formData, setFormData, nextStep, prevStep }) {
    const cities = ["Mumbai", "Bangalore", "Chennai", "Delhi", "Goa", "Kochi", "Kolkata", "Mangalore", "Hyderabad"];
  
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Select your city</h2>
  
        <input
          type="text"
          placeholder="Enter your city"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="w-full p-3 border rounded"
        />
  
        <h3 className="text-lg font-medium">Popular cities</h3>
        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setFormData({ ...formData, city })}
              className={`px-4 py-2 rounded ${
                formData.city === city ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {city}
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
  