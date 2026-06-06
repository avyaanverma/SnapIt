import asyncHandler from
"../middlewares/asyncHandler.js";

import { searchUsersService }
from "../services/user.service.js";

import ApiResponse from
"../utils/ApiResponse.js";

export const searchUsers =
asyncHandler(
  async (req, res) => {

    const query =
      req.query.query || "";

    const users =
      await searchUsersService(
        query,
        req.user.id
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        users,
        "Users fetched successfully"
      )
    );
  }
);