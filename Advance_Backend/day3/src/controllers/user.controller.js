import { asyncHandelr } from "../utils/asyncHandler.js";

const registerUser = asyncHandelr(async (req, res) => {
  res.status(200).json({
    messaage: "All set",
  });
});

export { registerUser };
