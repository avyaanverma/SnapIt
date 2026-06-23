import React from "react";
import { Outlet, Navigate, Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";

const PrivateLayout = () => {
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      localStorage.removeItem("user");
      setAuthUser(null);
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4">
        <div className="space-y-6">
          <div className="px-2 text-xl font-bold tracking-wider text-blue-500">
            Snap<span className="text-white">It</span> Workspace
          </div>
          <nav className="space-y-1">
            <Link to="/inbox" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl bg-slate-800 text-blue-400">
              💬 Messaging Direct Threads
            </Link>
          </nav>
        </div>
        
        <div className="p-2 border-t border-slate-800 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-semibold text-sm">
              {authUser.name?.charAt(0).toUpperCase()}
            </div>
            <div className="truncate max-w-[120px]">
              <p className="text-sm font-medium text-slate-200 truncate">{authUser.name}</p>
              <p className="text-xs text-slate-500 truncate">Online</p>
            </div>
          </div>
          <button onClick={handleLogout} className="text-xs text-red-400 hover:bg-red-500/10 p-2 rounded-lg transition-colors">
            🚪
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden bg-slate-950">
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;