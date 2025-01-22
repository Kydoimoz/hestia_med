<<<<<<< HEAD
import mongoose from "mongoose";
import Schema from "mongoose";


const staff_roles = new mongoose.Schema({
  name: {
    type: String, 
    required: true, 
    trim: true
  },
  role: {
    type: String, 
    required: true, 
    enum: ['Doctor', 'Nurse', 'Administration'], 
    trim: true
  },
  department: {
    type: String, 
    required: true, 
    trim: true
  },
  contactInfo: {
    phone: {
      type: String, 
      required: true, 
      match: [/\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number.']
    },
    email: {
      type: String,
      required: true,
      match: [/.+\@.+\..+/, 'Please enter a valid email address.']
    }
  },
  hireDate: {
    type: Date, 
    default: Date.now, 
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'On Leave'], 
    default: 'Active'
  },
  qualifications: {
    degree: {
      type: String,
      required: true,
      trim: true
    },
    institution: {
      type: String, 
      required: true,
      trim: true
    },
    yearOfCompletion: {
      type: Number, 
      required: true
    }
  },
  emergencyContact: {
    name: {
      type: String, 
      required: true
    },
    relationship: {
      type: String, 
      required: true
    },
    phone: {
      type: String, 
      required: true
    }
  }
}, {
  timestamps: true 
});

const StaffRoles = mongoose.models.StaffRoles || mongoose.model('StaffRoles', staff_roles);

module.exports = StaffRoles;
=======
version https://git-lfs.github.com/spec/v1
oid sha256:6a8397bf483e0488285bc994a8badd4a2274c7a416242e0c8ec078561fc02037
size 1536
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
