import React from 'react';
import { Link } from 'react-router-dom';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Signup() {
  return (
    <div className=" relative bg-gradient-to-br from-black to-gray-800 text-white px-4 flex justify-center items-center">
      {/* Return to Home Button */}
      <Link
        to="/"
        className="absolute top-4 right-4 py-3 px-6 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-700 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Return to Home
      </Link>

      {/* Signup Form */}
      <div className="w-full max-w-lg mt-2 bg-gray-900 bg-opacity-90 rounded-lg shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center mb-6">Create an Account</h2>
        <p className="text-center text-gray-400 mb-8">
          Join us to explore an endless world of entertainment.
        </p>

        {/* Form Section */}
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Re-enter your password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Sign Up
          </button>
        </form>

        {/* Separator */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="px-3 text-sm text-gray-400">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Social Signup */}
        <div className="flex flex-col space-y-4">
          <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-lg font-semibold flex items-center justify-center gap-2 transition-all">
                       <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
           
            Sign Up with Facebook
          </button>
          <button className="w-full py-3 rounded-lg bg-gray-600 hover:bg-gray-700 text-lg font-semibold flex items-center justify-center gap-2 transition-all">
                        <FontAwesomeIcon icon={faGoogle} className="w-6 h-6" />
            
            Sign Up with Google
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link
            to="/Login"
            className="text-blue-500 hover:underline hover:text-blue-400"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
