import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: [{
    type: String
  }],
  salary: {
    type: Number,
    required: true
  },
  experienceLevel: {
    type: Number,
    require:true
  },
  location: {
    type: String,
    required: true
  },

  jobType: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true
  },

  //There will be connection of job and the company .
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applications: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application',
    //This will not be necessary true as jab apply karenge tab ye true hoga.
  }
},{ timestamps: true });

export const Job = mongoose.model("Job", jobSchema);