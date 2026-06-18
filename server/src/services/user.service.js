import User from "../models/user.model.js";

export const searchUsersService =
async (
  query,
  currentUserId
) => {

  return await User.find({
    $and: [
      {
        _id: {
          $ne: currentUserId,
        },
      },
      {
        $or: [
          {
            name: {
              $regex: query,
              $options: "i",
            },
          },
          {
            email: {
              $regex: query,
              $options: "i",
            },
          },
        ],
      },
    ],
  }// Inside searchUsersService, change .select() string:
// Replace 'isOnline' with 'status'
).select("_id name email avatar status");
};