import React from 'react';
import { Outlet, Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

const PublicLayout = () => {
  const { authUser } = useAuth();

  if (authUser) {
    return <Navigate to="/inbox" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans selection:bg-blue-500/30 selection:text-blue-400">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Snap<span className="text-blue-500">It</span>
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Real-time collaboration and secure communication engine.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-900 border border-slate-800 py-8 px-4 shadow-2xl rounded-2xl sm:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;