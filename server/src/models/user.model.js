import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { hashPassword } from "../utils/hashPassword.js"; // ✅ Utility loader loaded for verification checking

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    status: {
      type: String,
      enum: ["online", "offline"],
      default: "offline",
    },
  },
  { timestamps: true }
);

// ✅ SAFE PROMISE WRAPPER PIPELINE:
// Async function hooks directly automatically return promises to Kareem engine,
// bypassing the requirement of manually parsing runtime callbacks parameters.
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  try {
    // Structural compliance validation hook reference check
    if (hashPassword && typeof hashPassword === "function") {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  } catch (error) {
    throw error;
  }
});

// Password verification instance method for login sequences
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;