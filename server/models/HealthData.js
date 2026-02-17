import mongoose from "mongoose";

const healthSchema = new mongoose.Schema({
  steps: Number,
  calories: Number,
  activeMinutes: Number,
  heartRate: Number,
  ecg: String,
  spo2: Number,
  menstrualCyclePhase: String,
  stressLevel: Number,
  bodyComposition: {
    bodyFat: Number,
    muscleMass: Number,
    bmi: Number
  },
  sleep: {
    deep: Number,
    light: Number,
    rem: Number,
    apneaEvents: Number
  },
  bloodPressure: {
    systolic: Number,
    diastolic: Number
  },
  energyScore: Number,
  antioxidantIndex: Number,
  fallDetected: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("HealthData", healthSchema);
