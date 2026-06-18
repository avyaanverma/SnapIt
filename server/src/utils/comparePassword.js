import bcrypt from "bcryptjs"; //  Added missing import

export const comparePassword = function (plainPassword) {
    return bcrypt.compareSync(plainPassword, this.password); //  Fixed logic & arguments
};