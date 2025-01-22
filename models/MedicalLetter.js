<<<<<<< HEAD
import mongoose from "mongoose";
import Schema from "mongoose";

const medical_letter = new mongoose.Schema({
    patient: {
      name: {
        type: String,
        required: true,
        trim: true,  
        maxlength: 100
      },
      patientId: {
        type: Schema.Types.ObjectId, 
        ref: 'Patient',
        required: true,
        index: true 
      },
      dateOfBirth: {
        type: Date,
        required: true
      },
      gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
      },
      address: {
        type: String,
        required: true,
        trim: true,
      }
    },
    diagnosis: {
      type: String,
      required: true,
      trim: true,
    },
    findings: {
      type: String,
      trim: true,
    },
    therapy: {
      type: String,
      trim: true,
    },
    medication: {
      type: String,
      trim: true,
    },
    recommendations: {
      type: String,
      trim: true,
    },
    followUpDate: {
      type: Date,
      required: true
    },
    doctor: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      signature: {
        type: String,
        required: true,
      }
    },
    reportDate: {
      type: Date,
      default: Date.now 
    }
  }, {
    timestamps: true,  
    versionKey: false  
  });
  
  
  medical_letter.index({ 'patient.patientId': 1 });
  
  const MedicalLetter = mongoose.models.MedicalLetter || mongoose.model('MedicalLetter', medical_letter);
  
  module.exports = MedicalLetter;
=======
version https://git-lfs.github.com/spec/v1
oid sha256:038ba644014cec77f47232fa24eca18f0f13682f8b59466d17c2995fd2736d60
size 1647
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
