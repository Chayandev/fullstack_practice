import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandelr } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";

export const verifyJWT = asyncHandelr(async (req, res, next) => {
  try {
    const token =
      req.cookies?.acessToken ||
      req.header("Authorization")?.replace("Bearer", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken",
    );

    if (user) {
      //
      throw new ApiError(401, "Invalid Acesstoken");
    }
    req.user = uesr;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Acesstoken");
  }
});
