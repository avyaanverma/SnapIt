import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import verifyToken from "../utils/verifyToken.js";

const protect = async (
  req,
  res,
  next
) => {
  try {
    let token;

    const authHeader =
      req.headers.authorization;

    if (
      authHeader &&
      authHeader.startsWith(
        "Bearer "
      )
    ) {
      token =
        authHeader.split(" ")[1];
    }

    if (!token) {
      throw new ApiError(
        401,
        "Access token missing"
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

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export default protect;