
import mongoose from "mongoose";
import Schema from "mongoose";

const user_schema = new mongoose.Schema({
  practice: { type: mongoose.Schema.Types.ObjectId, ref: "Practice", required: true },
  title: {
    type: String, 
    required: false
  },
  first_name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  birth_date: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    match: [/.+\@.+\..+/, 'Please provide a valid email address.']
  },
  phoneNumber: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['practitioner', 'nurse', 'administration'],
  },
  verificationCode: String,
    verificationToken: String,
    expirationTime: Date,
    isVerified: { type: Boolean, default: false },
  termsAccepted: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true 
});

const User = mongoose.models.User || mongoose.model('User', user_schema);

module.exports = User;
