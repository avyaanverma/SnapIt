import React, { useState, useEffect, useRef } from "react";
import { useSocket } from "../context/SocketContext";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";

const Inbox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [typedMessage, setTypedMessage] = useState("");
  
  const { socket, onlineUsers } = useSocket();
  const { authUser } = useAuth();
  const messageEndRef = useRef(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await axiosInstance.get(`/user/search?query=${searchQuery}`);
        setUsers(res.data.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    loadUsers();
  }, [searchQuery]);

  useEffect(() => {
    if (!selectedUser) return;
    const loadChatHistory = async () => {
      try {
        const res = await axiosInstance.get(`/chat/${selectedUser._id}`);
        setMessages(res.data.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    loadChatHistory();
  }, [selectedUser]);

  useEffect(() => {
    if (!socket) return;
    socket.on("newMessage", (message) => {
      if (selectedUser && (message.senderId === selectedUser._id || message.receiverId === selectedUser._id)) {
        setMessages((prev) => [...prev, message]);
      }
    });
    return () => socket.off("newMessage");
  }, [socket, selectedUser]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!typedMessage.trim() || !selectedUser) return;

    try {
      const res = await axiosInstance.post(`/chat/send/${selectedUser._id}`, {
        messageText: typedMessage,
      });
      setMessages((prev) => [...prev, res.data.data]);
      setTypedMessage("");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex h-full border border-slate-800 rounded-2xl overflow-hidden m-4 bg-slate-900">
      <div className="w-80 border-r border-slate-800 flex flex-col bg-slate-900/50">
        <div className="p-4 border-b border-slate-800">
          <input
            type="text"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-200"
            placeholder="Search team workspace members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {users.map((user) => {
            const isOnline = onlineUsers.includes(user._id);
            return (
              <button
                key={user._id}
                onClick={() => setSelectedUser(user)}
                className={`w-full flex items-center gap-3 p-4 hover:bg-slate-800/50 transition-colors text-left ${selectedUser?._id === user._id ? "bg-slate-800" : ""}`}
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-slate-700 text-slate-200 font-semibold flex items-center justify-center">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  {isOnline && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full" />}
                </div>
                <div className="truncate">
                  <p className="text-sm font-medium text-slate-200">{user.name}</p>
                  <p className="text-xs text-slate-500 truncate">{user.email}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-slate-950/20">
        {selectedUser ? (
          <>
            <div className="p-4 border-b border-slate-800 bg-slate-900/30 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">
                {selectedUser.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-200">{selectedUser.name}</h4>
                <p className="text-xs text-slate-500">
                  {onlineUsers.includes(selectedUser._id) ? "Active connection session" : "Offline thread context"}
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => {
                const isMe = msg.senderId === (authUser.id || authUser._id);
                return (
                  <div key={msg._id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-md px-4 py-2.5 rounded-2xl text-sm shadow-md ${isMe ? "bg-blue-600 text-white rounded-br-none" : "bg-slate-800 text-slate-200 rounded-bl-none"}`}>
                      <p>{msg.messageText}</p>
                      <span className="block text-[10px] text-right text-slate-400 mt-1">
                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                );
              })}
              <div ref={messageEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-800 bg-slate-900/40 flex gap-3">
              <input
                type="text"
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-slate-200"
                placeholder="Message down thread layout context..."
                value={typedMessage}
                onChange={(e) => setTypedMessage(e.target.value)}
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl font-medium text-sm text-white transition-colors">
                Send 🚀
              </button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-500 p-8">
            <span className="text-4xl mb-2">💬</span>
            <p className="text-sm font-medium">Select a thread dialogue module node workspace panel items map to start messaging streams.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;