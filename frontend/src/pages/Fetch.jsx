import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
  const [patientData, setPatientData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/health-records");
        setPatientData(response.data); // Assuming the API returns an array of patient records
        setLoading(false);
      } catch (err) {
        console.error("Error fetching patient data:", err);
        setError("Failed to fetch patient data.");
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Loading patient data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-teal-400 p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Patient Data
      </h1>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {patientData.map((patient, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Patient Name: {patient.name}
            </h2>
            <p className="text-lg">
              <span className="font-bold">Age:</span> {patient.age}
            </p>
            <p className="text-lg">
              <span className="font-bold">Blood Group:</span> {patient.bloodGroup}
            </p>
            <p className="text-lg">
              <span className="font-bold">Medical History:</span>{" "}
              {patient.medicalHistory || "N/A"}
            </p>
            <p className="text-lg">
              <span className="font-bold">Allergies:</span>{" "}
              {patient.allergies || "N/A"}
            </p>
            <p className="text-lg">
              <span className="font-bold">Erythrocyte Sedimentation Rate (ESR):</span>{" "}
              {patient.esr}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetch;
