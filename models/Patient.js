<<<<<<< HEAD
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

=======
version https://git-lfs.github.com/spec/v1
oid sha256:ca7825dac197bfd8948e7d14755984160bb0c903f96e846977fb3067c95be971
size 1110
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
