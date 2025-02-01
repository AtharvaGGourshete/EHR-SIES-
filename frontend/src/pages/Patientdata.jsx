import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Patientdata = () => {
  const [formData, setFormData] = useState({
    patient_name: "",
    patient_age: "",
    blood_group: "",
    medical_history: "",
    allergy: "",
    esr: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/health-records",
        {
          name: formData.patient_name,
          age: parseInt(formData.patient_age), // Convert age to number
          bloodGroup: formData.blood_group,
          medicalHistory: formData.medical_history,
          allergies: formData.allergy,
          esr: parseFloat(formData.esr), // Convert ESR to number
        }
      );

      alert("Record saved successfully!");
      console.log("Response:", response.data);
      // Reset form data after successful submission
      setFormData({
        patient_name: "",
        patient_age: "",
        blood_group: "",
        medical_history: "",
        allergy: "",
        esr: "",
      });
    } catch (error) {
      console.error("Error saving record:", error);
      alert("An error occurred while saving the record.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-teal-400">
      <div className="text-4xl font-bold text-center p-5">
        Patient Data Form
      </div>
      <div className="flex justify-center mt-10">
        <div className="shadow-2xl w-1/2 bg-white p-5 rounded-2xl">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-3.5">
              <label htmlFor="name" className="text-2xl font-semibold">
                Patient Name
              </label>
              <input
                type="text"
                id="name"
                name="patient_name"
                value={formData.patient_name}
                onChange={handleChange}
                placeholder="Enter patient name"
                required
                className="border-2 rounded-lg w-96"
              />
            </div>
            <br />
            <div className="flex gap-8.5">
              <label htmlFor="age" className="text-2xl font-semibold">
                Patient Age
              </label>
              <input
                type="number"
                id="age"
                name="patient_age"
                value={formData.patient_age}
                onChange={handleChange}
                placeholder="Enter patient age"
                required
                className="border-2 rounded-lg w-96"
              />
            </div>
            <br />
            <div className="flex gap-6">
              <label htmlFor="blood-group" className="text-2xl font-semibold">
                Blood Group
              </label>
              <select
                id="blood-group"
                name="blood_group"
                value={formData.blood_group}
                onChange={handleChange}
                required
                className="border-2 rounded-lg w-96"
              >
                <option value="" disabled>
                  Select blood group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <br />
            <div className="flex gap-4">
              <label
                htmlFor="medical-history"
                className="text-2xl font-semibold"
              >
                Medical History
              </label>
              <textarea
                id="medical-history"
                name="medical_history"
                value={formData.medical_history}
                onChange={handleChange}
                rows="4"
                placeholder="Provide medical history"
                className="border-2 rounded-lg w-80"
              ></textarea>
            </div>
            <br />
            <div className="flex gap-20">
              <label htmlFor="allergy" className="text-2xl font-semibold">
                Allergies
              </label>
              <textarea
                id="allergy"
                name="allergy"
                value={formData.allergy}
                onChange={handleChange}
                rows="3"
                placeholder="Specify any allergies"
                className="border-2 rounded-lg w-96"
              ></textarea>
            </div>
            <br />

            <div className="flex gap-2">
              <label htmlFor="esr" className="text-2xl font-semibold">
                ESR (Erythrocyte Sedimentation Rate)
              </label>
              <input
                type="number"
                id="esr"
                name="esr"
                value={formData.esr}
                onChange={handleChange}
                placeholder="Enter ESR value"
                required
                className="border-2 rounded-lg"
              />
            </div>
            <br />
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-gray-900 bg-[#388ef7] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-xl px-6 py-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Patientdata;
