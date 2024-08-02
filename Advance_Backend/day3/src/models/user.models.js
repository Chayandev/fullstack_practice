import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//pre hook - just before the dat save this hook will do something
// jwt is a bearar token , used to make know that someone who bear
// will be right , the bearer who sends that will send data

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, //to enable search
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String, //cludinary url
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACESS_TOKEN_EXPIRY,
    },
  );
};
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    },
  );
};

//acess tokens are short lived but refresh tokens are long lived , becasue when you have acess token , you can take this in case of authentication , if i set the acesstoken less time i.e 15 min , that means user's log in time will expire in 15 min , so user have to log in again ,
// refresh token saved in db and also in the server , so if you haev reresh token no need to login every time while acess token expire, so you jst  have to hit a end point , if the refresh token sin deatabse dn your tone is same then it can be done easily
//while the short lived acces token get expired then the refresh token is used to get new acess token

export const User = mongoose.model("User", userSchema);
