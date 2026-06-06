import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import verifyToken from "../utils/verifyToken.js";

const protect = async (
  req,
  res,
  next
) => {
  try {
    const token = req.cookies?.accessToken;

    if (!token) {
      throw new ApiError(
        401,
        "Authentication required"
      );
    }

    const decoded =
      verifyToken(token);

    const user =
      await User.findById(
        decoded.id
      ).select("-password");

    if (!user) {
      throw new ApiError(
        404,
        "User not found"
      );
    }

    req.user = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    next();
  } catch (error) {
    next(error);
  }
};

export default protect;