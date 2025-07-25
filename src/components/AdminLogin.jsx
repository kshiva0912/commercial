import React, { useState } from 'react';

export default function Login() {
  const [role, setRole] = useState('admin');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // You can POST this to your backend
    const loginData = {
      role,
      identifier, // username or email
      password,
    };

    console.log('Login Attempt:', loginData);

    // TODO: Replace with API call
    // Example: axios.post('/api/login', loginData)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        {/* Role Selector */}
        <div className="flex justify-center flex-wrap gap-2">
          {['admin', 'employee', 'stock_manager', 'delhivery'].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`capitalize px-3 py-1 rounded-full text-sm font-medium border ${
                role === r
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {r.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username or Email
            </label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username or email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login as {role.replace('_', ' ')}
          </button>
        </form>
      </div>
    </div>
  );
}
