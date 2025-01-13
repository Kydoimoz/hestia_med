import mongoose from "mongoose";
import Schema from "mongoose";

const examination_protocol = new mongoose.Schema({
  patient: {
    type: Schema.Types.ObjectId,  
    ref: 'Patient',
    required: true,
    index: true 
  },
  examinationDate: {
    type: Date,
    required: true,
    index: true 
  },
  examiner: {
    type: String,
    required: true,
    trim: true, 
    maxlength: 100
  },
  findings: {
    type: String,
    trim: true, 
    maxlength: 1000
  },
  diagnosis: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  treatmentRecommendations: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  followUpDate: {
    type: Date,
    required: false
  },
  imaging: {
    type: String,
    trim: true,
    maxlength: 500
  },
  labResults: {
    type: String,
    trim: true,
    maxlength: 500
  },
  vitalSigns: {
    heartRate: {
      type: Number,
      min: 30, 
      max: 200, 
    },
    bloodPressure: {
      type: String,
      trim: true,
      match: /^[0-9]{2,3}\/[0-9]{2,3}$/, // Validate blood pressure format (e.g., "120/80")
    },
    respiratoryRate: {
      type: Number,
      min: 5,   
      max: 40   
    },
    temperature: {
      type: Number,
    },
    oxygenSaturation: {
      type: Number,
      min: 80,  
      max: 100
    }
  },
  physicalExamination: {
    generalAppearance: {
      type: String,
      trim: true,
      maxlength: 500
    },
    headAndNeck: {
      type: String,
      trim: true,
      maxlength: 500
    },
    chest: {
      type: String,
      trim: true,
      maxlength: 500
    },
    abdomen: {
      type: String,
      trim: true,
      maxlength: 500
    },
    extremities: {
      type: String,
      trim: true,
      maxlength: 500
    },
    neurological: {
      type: String,
      trim: true,
      maxlength: 500
    }
  },
  additionalNotes: {
    type: String,
    trim: true,
    maxlength: 1000
  }
}, {
  timestamps: true, 
  versionKey: false 
});

// compound index
examination_protocol.index({ patient: 1, examinationDate: -1 });

const ExaminationProtocol = mongoose.models.ExaminationProtocol || mongoose.model('ExaminationProtocol', examination_protocol);

module.exports = ExaminationProtocol;
