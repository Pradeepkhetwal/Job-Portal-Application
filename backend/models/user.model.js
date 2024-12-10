import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    //We use enum in case we have options to choose.
    type: String,
    enum: ['student', 'recruiter'],
    required: true
  
  },
  profile: {
    //Here we have not set required to true as because on creating a new account user will add more details these details after creating a account.
    bio: { type: String },
    skills: [{ type: String }],
    resume: { type: String },//to store url to resume file.
    resumeOriginalName: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    profilePhoto: {
      type: String,
      default: ""
    }
  },
}, { timestamps: true });//Timestamps is set true so that we can also record the timestamp.

export const User = mongoose.model('User', userSchema);