// components/FamilyForm.js
import { FaUser, FaFemale, FaChild } from "react-icons/fa";

export default function FamilyForm({ formData, setFormData, nextStep, prevStep }) {
  const memberIcons = {
    "Self": { icon: <FaUser className="text-blue-500" />, color: "bg-blue-100" },
    "Wife": { icon: <FaFemale className="text-pink-500" />, color: "bg-pink-100" },
    "Son": { icon: <FaChild className="text-green-500" />, color: "bg-green-100" },
    "Daughter": { icon: <FaChild className="text-purple-500" />, color: "bg-purple-100" }
  };

  const handleAgeChange = (relation, age) => {
    const updatedMembers = formData.members.map(member =>
      member.relation === relation ? { ...member, age } : member
    );
    if (!formData.members.some(member => member.relation === relation)) {
      updatedMembers.push({ relation, age });
    }
    setFormData({ ...formData, members: updatedMembers });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Select age of covered member(s)</h2>

      {formData.selectedMembers.map((relation, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          <div className={`p-2 rounded-full ${memberIcons[relation]?.color}`}>
            {memberIcons[relation]?.icon}
          </div>

          <div className="flex-1">
          <label className="block text-gray-700 font-medium">{`${relation}'s age`}</label>
            <select
              value={formData.members.find(member => member.relation === relation)?.age || ""}
              onChange={(e) => handleAgeChange(relation, e.target.value)}
              className="w-full p-2 mt-1 border rounded"
            >
              <option value="">Select age</option>
              {[...Array(100).keys()].slice(1).map(age => (
                <option key={age} value={age}>{age} yr</option>
              ))}
            </select>
          </div>
        </div>
      ))}

      <button
        onClick={nextStep}
        className="w-full bg-black text-white py-3 rounded mt-4 hover:bg-gray-800 transition ease-in-out duration-200"
      >
        Continue
      </button>

      <button
        onClick={prevStep}
        className="w-full bg-gray-500 text-white py-3 rounded mt-2 hover:bg-gray-600 transition ease-in-out duration-200"
      >
        Back
      </button>
    </div>
  );
}
