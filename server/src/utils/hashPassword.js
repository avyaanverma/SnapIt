import bcrypt from "bcryptjs";

// ✅ Traditional standard function ensures 'this' points directly to the document context natively
export const hashPassword = function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    this.password = bcrypt.hashSync(this.password, 10);
    next(); // ✅ Native iterator chain securely triggered
  } catch (error) {
    next(error);
  }
};