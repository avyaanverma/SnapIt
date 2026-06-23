import express from "express";
import protect from "../middlewares/auth.middleware.js";
import { sendMessage, getMessages } from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/:id", protect, getMessages);
router.post("/send/:id", protect, sendMessage);

export default router;