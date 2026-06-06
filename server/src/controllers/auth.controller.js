import asyncHandler from "../middlewares/asyncHandler.js";

import {
  registerUser,
  loginUser,
} from "../services/auth.service.js";

import ApiResponse from "../utils/ApiResponse.js";

import generateToken from "../utils/generateToken.js";

export const register =
  asyncHandler(
    async (req, res) => {
      const {
        name,
        email,
        password,
      } = req.body;

      const user =
        await registerUser(
          name,
          email,
          password
        );

      const token =
        generateToken({
          id: user._id,
        });

      return res
        .status(201)
        .json(
          new ApiResponse(
            201,
            {
              user,
              token,
            },
            "User registered successfully"
          )
        );
    }
  );

export const login =
  asyncHandler(
    async (req, res) => {
      const {
        email,
        password,
      } = req.body;

      const user =
        await loginUser(
          email,
          password
        );

      const token =
        generateToken({
          id: user._id,
        });

      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            {
              user,
              token,
            },
            "Login successful"
          )
        );
    }
  );

export const getMe =
  asyncHandler(
    async (req, res) => {
      return res.json(
        new ApiResponse(
          200,
          req.user
        )
      );
    }
  );