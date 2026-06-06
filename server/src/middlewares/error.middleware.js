const errorHandler = (
  err,
  req,
  res,
  next
) => {
  let statusCode =
    err.statusCode || 500;

  let message =
    err.message ||
    "Internal Server Error";

  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid Resource ID";
  }

  if (err.code === 11000) {
    statusCode = 400;
    message =
      "Duplicate field value entered";
  }

  return res.status(statusCode).json({
    success: false,
    message,
    stack:
      process.env.NODE_ENV ===
      "development"
        ? err.stack
        : undefined,
  });
};

export default errorHandler;