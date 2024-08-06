import { asyncHandelr } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { response } from "express";
const genereAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token",
    );
  }
};

const registerUser = asyncHandelr(async (req, res) => {
  // get user details from frontend
  // validation
  // check if users already exist or not :username , email
  // check for images , check for avatar
  // upload them to clodinary , avatar
  // create user object - creat entry in db
  // remove password and refresh token field form response
  // check fir user creation
  // return res

  const { fullname, username, email, password } = req.body;
  console.log(`email: ${email}`);

  if (
    [fullname, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with same email or username already exist");
  }

  console.log(req.files);
  //const avatarLocalPath = req.files?.avatar[0]?.path;
  let avatarLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.avatar) &&
    req.files.avatar.length > 0
  ) {
    avatarLocalPath = req.files.avatar[0].path;
  }

  // const coverImageLocalPath = req.files?.coverImage[0]?.path;

  //cover image is optional so , check this
  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar File is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar File is required");
  }

  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    username: username.toLowerCase(),
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while creating user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "Registation Sucessfull"));
});

const loginUser = asyncHandelr(async (req, res) => {
  // take user input , email and password from req-body
  // log in username or email
  // find the user
  // if we get user check password
  // acess and refresh token both generate and send to user
  //send cooki and respose

  const { email, username, password } = req.body;
  console.log(`email: ${email} and username:${username}`);
  if (!(username || email)) {
    throw new ApiError(400, "username or email is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(404, "User dose'nt exist!");
  }

  const isPasswordvalid = await user.isPasswordCorrect(password);

  if (!isPasswordvalid) {
    throw new ApiError(401, "Password is wrong");
  }

  const { accessToken, refreshToken } = await genereAccessAndRefreshTokens(
    user._id,
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  const options = {
    httpOnly: true, //cookie can't be modified in frontend
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully",
      ),
    );
});

const logOutUser = asyncHandelr(async (req, res) => {
  //remove access-refresh token form cookie
  // aslo update datebase the refresh token
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    {
      new: true,
    },
  );
  const options = {
    httpOnly: true, //cookie can't be modified in frontend
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logout ScuessFully"));
});

const refreshAcessToken = asyncHandelr(async (req, res) => {
  const incomeingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomeingRefreshToken) {
    throw new ApiError(401, "Unauthorized Request");
  }
  try {
    const decodedToken = jwt.verify(
      incomeingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid RefreshToken");
    }

    if (incomeingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh Token is expired");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } = await genereAccessAndRefreshTokens(
      user._id,
    );

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, newRefreshToken },
          "Acess token Refreshed sucessfully!",
        ),
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "invalid refrech Token");
  }
});

export { registerUser, loginUser, logOutUser,refreshAcessToken };
