import { asyncHandelr } from "../utils/asyncHandler.js";
import { Scheme } from "../models/schemes.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { json } from "express";

const addSchemes = asyncHandelr(async (req, res) => {
  const schemeData = req.body;

  const existingScheme = await Scheme.findOne({ scheme: schemeData.scheme });

  if (existingScheme) {
    throw new ApiError(400, "Scheme already exists");
  }

  // Create a new scheme document
  const newScheme = new Scheme(schemeData);

  const savedScheme = await newScheme.save();

  console.log(savedScheme);

  return res
    .status(201)
    .json(new ApiResponse(200, {}, "Scheme is added Sccessfully!"));
});

const getAllScheme = asyncHandelr(async (req, res) => {
  const schemes = await Scheme.find();
  console.log(schemes);

  return res
    .status(201)
    .json(new ApiResponse(200, schemes, "All Schemes fetched Successfully!"));
});

export { addSchemes, getAllScheme };
