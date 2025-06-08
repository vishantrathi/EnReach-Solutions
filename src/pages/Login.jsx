import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-4">Admin Login</h1>
      <form className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded"
        />
        <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
