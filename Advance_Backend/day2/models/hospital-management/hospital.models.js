import mongoose from "mongoose";

const hospitalScema = new mongoose.Schema({}, { timestamps: true })

export const Hospital = mongoose.model("Hospital", hospitalScema);