import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    userProfile: {
      name: String,
      email: String,
      password: String,
      gender: String,
      dob: Date,
    },
    contactInfo: {
      phoneNumber: String,
      altPhone: String,
      address1: String,
      address2: String,
      city: String,
      postalCode: String,
      country: String,
    },
    employmentInfo: {
      jobTitle: String,
      employmentStatus: String,
      companyName: String,
      experience: Number,
      resume: String,
    },
    financialInfo: {
      income: Number,
      loanStatus: String,
      loanAmount: Number,
      creditScore: Number,
    },
    preferences: {
      contactMode: String,
      hobbies: [String],
      newsletter: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Form", formSchema);
