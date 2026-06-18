import Message from "../models/message.model.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

//  Send Message Controller
export const sendMessage = asyncHandler(async (req, res) => {
  const { messageText } = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user.id;

  if (!messageText) {
    throw new ApiError(400, "Message text is required");
  }

  const newMessage = await Message.create({
    senderId,
    receiverId,
    messageText,
  });

  // Real-time optimization using Socket.io
  const receiverSocketId = getReceiverSocketId(receiverId);
  if (receiverSocketId) {
    io.to(receiverSocketId).emit("newMessage", newMessage);
  }

  return res.status(201).json(
    new ApiResponse(201, newMessage, "Message sent successfully")
  );
});

//  Get Messages History Controller
export const getMessages = asyncHandler(async (req, res) => {
  const { id: userToChatId } = req.params;
  const senderId = req.user.id;

  const messages = await Message.find({
    $or: [
      { senderId: senderId, receiverId: userToChatId },
      { senderId: userToChatId, receiverId: senderId },
    ],
  }).sort({ createdAt: 1 });

  return res.status(200).json(
    new ApiResponse(200, messages, "Messages history fetched successfully")
  );
});