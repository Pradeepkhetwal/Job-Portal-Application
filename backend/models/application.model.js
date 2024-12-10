import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({

  //this is for ki kaun si company mein apply kiya hai applicant ne aur kis job k liye.
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected']
  }
}, { timestamps: true });

export const Application = mongoose.model('Application', applicationSchema);