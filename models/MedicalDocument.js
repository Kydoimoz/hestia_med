import mongoose from "mongoose";
import Schema from "mongoose";

const medical_document = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
    required: false 
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
  }, {
      timestamps: true 
});


const MedicalDocument = mongoose.models.MedicalDocument || mongoose.model('MedicalDocument', medical_document);

module.exports = MedicalDocument;
