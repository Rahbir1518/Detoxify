import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import corporateImg from "../assets/corporate.jpg";
import corporate_left from "../assets/corporate_left.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const formContent = (
    <motion.div
      key="form"
      initial={{ opacity: 0, x: isSignUp ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isSignUp ? -100 : 100 }}
      transition={{ duration: 1.0 }}
      className="w-full max-w-md bg-gray-100 rounded-xl shadow-lg p-6 sm:p-8"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center font-primary">
        {isSignUp ? "Sign Up" : "Sign In"}
      </h2>

      <form className="space-y-4">
        {isSignUp && (
          <>
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="First Name" className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
              <input type="text" placeholder="Last Name" className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
            </div>
            <input type="text" placeholder="Username" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
          </>
        )}

        <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />

        <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />

        {!isSignUp && (
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a className="text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer">Forgot password?</a>
          </div>
        )}

        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors cursor-pointer">
          {isSignUp ? "Create Account" : "Sign In"}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <span onClick={() => setIsSignUp(!isSignUp)} className="text-indigo-600 hover:text-indigo-500 font-medium cursor-pointer">
          {" "}
          {isSignUp ? "Sign in" : "Sign up"}
        </span>
      </div>
    </motion.div>
  );

  return (
    <>
      <div className="bg-loginPrime p-4">
        <button className="font-primary text-white font-extrabold text-2xl sm:text-3xl cursor-pointer hover:underline" onClick={handleClick}>
          Detoxify
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row h-full sm:h-screen font-primary">
        <AnimatePresence mode="wait">
          {isSignUp ? (
            <>
              {/* Image on the Left */}
              <motion.div
                key="leftImage"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.0 }}
                className="w-full sm:w-1/2 flex items-center justify-center bg-[#fcf8f5] p-4"
              >
                <img src={corporate_left} alt="Corporate worker" className="w-full h-60 sm:h-[90%] object-cover rounded-lg shadow-lg" />
              </motion.div>

              {/* Form on the Right */}
              <div className="w-full sm:w-1/2 flex items-center justify-center bg-[#fcf8f5] p-4">{formContent}</div>
            </>
          ) : (
            <>
              {/* Form on the Left */}
              <div className="w-full sm:w-1/2 flex items-center justify-center bg-[#fcf8f5] p-4">{formContent}</div>

              {/* Image on the Right */}
              <motion.div
                key="rightImage"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.0 }}
                className="w-full sm:w-1/2 flex items-center justify-center bg-[#fcf8f5] p-4"
              >
                <img src={corporateImg} alt="Corporate worker" className="w-full h-60 sm:h-[90%] object-cover rounded-lg shadow-lg" />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Login;
