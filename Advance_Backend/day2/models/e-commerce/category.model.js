import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
      
}, { timestamps: true }
)

export const Categoty = mongoose.model("Category", categorySchema);