<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:d91e258845792ad1410cc447cb2a0fd8b6c40423214fe4d349b68862a20ffc22
size 1414
>>>>>>> 27aa36463c4f1ad2a7c8c8bc2ccada08a4bca70a
