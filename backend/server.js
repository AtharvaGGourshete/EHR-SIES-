import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://edlyelearning:aj9qkd12IFe0FMk2@cluster0.zs7zk.mongodb.net/ehr",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bloodGroup: { type: String, required: true },
  medicalHistory: { type: String },
  allergies: { type: String },
  esr: { type: Number },
});

const Patient = mongoose.model("Patient", patientSchema);

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Routes
app.post("/api/health-records", async (req, res) => {
  try {
    const { name, age, bloodGroup, medicalHistory, allergies, esr } = req.body;
    const patient = new Patient({
      name,
      age,
      bloodGroup,
      medicalHistory,
      allergies,
      esr,
    });
    const savedPatient = await patient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    console.error("Error saving patient data:", error);
    res.status(500).json({ error: "Error saving patient data" });
  }
});

app.get("/api/health-records", async (req, res) => {
  try {
    const records = await Patient.find(); // Fetch all records
    res.status(200).json(records);
  } catch (error) {
    console.error("Error fetching health records:", error);
    res.status(500).json({ error: "Failed to fetch health records." });
  }
});

app.get("/api/health-records/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const record = await Patient.findById(id);

    if (!record) {
      return res.status(404).json({ error: "Record not found." });
    }

    res.status(200).json(record);
  } catch (error) {
    console.error("Error fetching health record:", error);
    res.status(500).json({ error: "Failed to fetch health record." });
  }
});
