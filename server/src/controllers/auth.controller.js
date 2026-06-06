import asyncHandler from "../middlewares/asyncHandler.js";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../services/auth.service.js";

import generateToken from "../utils/generateToken.js";
import cookieOptions from "../utils/cookieOptions.js";

import ApiResponse from "../utils/ApiResponse.js";

export const register =
  asyncHandler(async (req, res) => {
    const {
      name,
      email,
      password,
    } = req.body;

    const user = await registerUser(
      name,
      email,
      password
    );

    const token = generateToken({
      id: user._id,
    });

    res.cookie(
      "accessToken",
      token,
      cookieOptions
    );

    return res.status(201).json(
      new ApiResponse(
        201,
        {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        },
        "User registered successfully"
      )
    );
  });

export const login =
  asyncHandler(async (req, res) => {
    const { email, password } =
      req.body;

    const user = await loginUser(
      email,
      password
    );

    const token = generateToken({
      id: user._id,
    });

    res.cookie(
      "accessToken",
      token,
      cookieOptions
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        },
        "Login successful"
      )
    );
  });

export const logout =
  asyncHandler(async (req, res) => {
    res.clearCookie("accessToken");

    return res.status(200).json(
      new ApiResponse(
        200,
        null,
        "Logged out successfully"
      )
    );
  });

export const getMe =
  asyncHandler(async (req, res) => {
    const user =
      await getCurrentUser(
        req.user.id
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        user,
        "Current user fetched successfully"
      )
    );
  });