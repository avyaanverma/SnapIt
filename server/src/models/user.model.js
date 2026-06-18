import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { comparePassword } from "../utils/comparePassword.js";
import { hashPassword } from "../utils/hashPassword.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    avatar: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["online", "offline"],
      default: "offline",
    },

    lastSeen: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", hashPassword);

userSchema.methods.comparePassword = comparePassword;

const userModel = mongoose.model("User", userSchema);
export default userModel;
