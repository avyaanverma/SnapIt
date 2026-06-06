import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";

export const registerUser =
  async (
    name,
    email,
    password
  ) => {
    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      throw new ApiError(
        409,
        "User already exists"
      );
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return user;
  };

export const loginUser =
  async (
    email,
    password
  ) => {
    const user =
      await User.findOne({
        email,
      }).select("+password");

    if (!user) {
      throw new ApiError(
        401,
        "Invalid Credentials"
      );
    }

    const isMatch =
      await user.comparePassword(
        password
      );

    if (!isMatch) {
      throw new ApiError(
        401,
        "Invalid Credentials"
      );
    }

    return user;
  };