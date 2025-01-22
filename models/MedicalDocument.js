<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:e79b6a9b5264499242e4d7fe0796f6f13c696b355e9b1eafe4a883d063f8e741
size 620
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
