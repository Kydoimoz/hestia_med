import mongoose from "mongoose";
import Schema from "mongoose";

const patientSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true
  },
  insurance: {
    type: String, 
    required: true
  },
  is_private: {
    type: String,
    required: true,
  },
  birth_date: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  documents: {
    type: [mongoose.Schema.Types.ObjectId], 
    ref: 'MedicalDocument', 
    default: [] 
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please provide a valid email address.']
  },
  emergency_contact: {
    type: String,
    required: true,
  },
  practice: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Practice', 
    required: true
  },
}, {
  timestamps: true 
});

const Patient = mongoose.models.Patient || mongoose.model('Patient', patientSchema);

module.exports = Patient;

