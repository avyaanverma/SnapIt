import bcrypt from "bcryptjs"; //  Added missing import

export const hashPassword = function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hashSync(this.password, 10);
  next();
};