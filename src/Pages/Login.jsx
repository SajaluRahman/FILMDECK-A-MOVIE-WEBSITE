import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="h-screen relative flex justify-center items-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      {/* Return to Home Button */}
      <Link
        to="/"
        className="absolute top-4 right-4 py-3 px-6 rounded-md bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-700 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Return to Home
      </Link>

      <div className="w-full max-w-md bg-gray-800 bg-opacity-90 rounded-lg shadow-xl p-6">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-red-500 drop-shadow-lg">
          Sign Up / Login
        </h2>

        {/* Form Section */}
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-400"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-lg font-bold transform hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Separator */}
        <div className="flex items-center my-8">
          <hr className="flex-grow border-gray-700" />
          <span className="px-4 text-sm text-gray-400">or</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Social Login */}
        <div className="flex flex-col space-y-4">
          <button className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-lg font-semibold flex items-center justify-center gap-3 transition-all">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
            Continue with Facebook
          </button>
          <button className="w-full py-3 rounded-md bg-gray-700 hover:bg-gray-600 text-lg font-semibold flex items-center justify-center gap-3 transition-all">
            <FontAwesomeIcon icon={faGoogle} className="w-6 h-6" />
            Continue with Google
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Don’t have an account?{' '}
          <Link
            to="/SignUp"
            className="text-red-500 hover:underline hover:text-red-400"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
