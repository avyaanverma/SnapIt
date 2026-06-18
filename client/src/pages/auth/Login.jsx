import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import axiosInstance from '../../api/axiosInstance';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axiosInstance.post("/auth/login", formData);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      setAuthUser(res.data.data.user);
      navigate('/inbox');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-xl">
          {error}
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-slate-300">Email address</label>
        <input
          type="email"
          required
          className="mt-1 block w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-300">Password</label>
        <input
          type="password"
          required
          className="mt-1 block w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-colors"
      >
        Sign In
      </button>

      <div className="text-center mt-4">
        <p className="text-sm text-slate-400">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-blue-500 hover:text-blue-400 transition-colors">
            Register here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;