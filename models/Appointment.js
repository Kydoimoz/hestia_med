import mongoose from "mongoose";
import Schema from "mongoose";
const appointment_schema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true, 
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date, 
    required: true
  },
  purpose: {
    type: String, 
    required: true
  }
}, {
  timestamps: true
});

const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointment_schema);

module.exports = Appointment;
