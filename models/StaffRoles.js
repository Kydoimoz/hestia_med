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
