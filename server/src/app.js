import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app } from "./socket/socket.js"; 

const app = express(); //  Declared first

//  Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

//  Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

export default app;