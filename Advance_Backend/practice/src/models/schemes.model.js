import mongoose, { Schema } from "mongoose";

const schemeSchema = new Schema(
  {
    wbResident: {
      type: "boolean",
      required: true,
    },
    gender: {
      type: "string",
      enum: ["Male", "Female", "Other", "ALL"],
      required: true,
    },
    age: {
      type: "string",
      required: true,
    },
    govtEmployee: {
      type: "boolean",
      required: false,
    },
    familyIncome: {
      type: "string",
      required: true,
    },
    socialCategory: {
      type: "string",
      enum: ["General", "SC", "ST", "OBC", "SC/ST", "SC/ST/OBC", "ALL"],
      required: true,
    },
    maritalStatus: {
      type: "string",
      enum: ["Married", "Unmarried", "Widowed", "ALL"],
      required: true,
    },
    profession: {
      type: "string",
      required: false,
    },
    additionalRequirements: {
      type: "string",
      required: false,
    },
    scheme: {
      type: "string",
      required: true,
    },
    documents: {
      type: "array",
      items: {
        type: "string",
      },
      required: false,
    },
    applicationFormOrWebsite: {
      type: "string",
      required: false,
    },
  },
  { timestamps: true }
);

export const Scheme = mongoose.model("Scheme", schemeSchema);
