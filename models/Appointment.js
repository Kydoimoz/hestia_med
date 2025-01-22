<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:f45abf06623020aa0ea90333289b955a0646aa43b9b5887eb4956cce3545c9b6
size 569
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
