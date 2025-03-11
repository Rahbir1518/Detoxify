import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import corporateImg from "../assets/corporate.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-loginPrime p-4">
        <button
          className="font-primary text-white font-extrabold text-3xl cursor-pointer hover:underline"
          onClick={handleClick}
        >
          Detoxify
        </button>
      </div>

      {/* Main Content */}
      <div className="flex h-screen font-primary">
        <div className="w-1/2 bg-white flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gray-100 rounded-xl shadow-lg p-8">
            <h2 className="sm:text-2xl font-bold text-gray-900 mb-6 text-center font-primary">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>

            <form className="space-y-4">
              {isSignUp && (
                <>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                </>
              )}

              <div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a className="text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <span
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-indigo-600 hover:text-indigo-500 font-medium cursor-pointer"
              >
                {" "}
                {isSignUp ? "Sign in" : "Sign up"}
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-1/2 h-screen flex items-center justify-center bg-white">
          <img
            src={corporateImg}
            alt="Corporate worker"
            className="h-[95%] w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
