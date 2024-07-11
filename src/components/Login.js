import React, { useRef, useState } from "react";
import { FaEthereum, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";


const LoginPage = () => {
  const [signIn, setsignIn] = useState(true);
  const [errormessage, seterrormessage] = useState(null);
  const password = useRef(null);
  const email = useRef(null);
  const navigate = useNavigate()

  const toggleSignIn = () => {
    setsignIn(!signIn);
  };

  const handleSignIn = () => {
    const message = checkValidData(email.current.value, password.current.value);
    seterrormessage(message);
    if (message) return;

    if (!signIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/dashboard")
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+""+errorMessage)
  });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-nft relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse absolute top-1/4 left-1/4 w-24 h-24 bg-purple-500 opacity-20 rounded-full"></div>
        <div className="animate-pulse absolute top-3/4 left-2/3 w-32 h-32 bg-pink-500 opacity-20 rounded-full"></div>
        <div className="animate-pulse absolute top-1/2 left-1/2 w-40 h-40 bg-blue-500 opacity-20 rounded-full"></div>
        <div className="animate-pulse absolute top-1/3 left-3/4 w-48 h-48 bg-yellow-500 opacity-20 rounded-full"></div>
        <div className="animate-pulse absolute top-2/3 left-1/5 w-56 h-56 bg-green-500 opacity-20 rounded-full"></div>
        <div className="animate-pulse absolute top-1/5 left-4/5 w-20 h-20 bg-red-500 opacity-20 rounded-full"></div>
        <div className="animate-pulse absolute top-1/2 left-1/3 w-28 h-28 bg-orange-500 opacity-20 rounded-full"></div>
      </div>

      <div className="bg-black bg-opacity-70 p-8 rounded-xl shadow-2xl w-96 backdrop-blur-sm z-10">
        <div className="flex items-center justify-center mb-6">
          <FaEthereum className="text-5xl text-purple-500 mr-2" />
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            NFTribe
          </h2>
        </div>
        <h1 className='p-5 pl-0 text-3xl  text-purple-500 hover:text-purple-400 font-semibold transition duration-300" '>
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {!signIn && (
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              />
            </div>
          )}

          <div className="relative">
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
            />
          </div>
          <div className="relative">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
            />
          </div>
          <p className=" text-white">{errormessage}</p>
          <button
            onClick={handleSignIn}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold hover:opacity-90 transition duration-300 transform hover:scale-105 hover:shadow-neon"
          >
            {signIn ? "Log In" : "Sign Up"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-sm text-purple-400 hover:text-purple-300 transition duration-300"
          >
            Forgot Password?
          </a>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-110 hover:shadow-neon">
            <FaFacebookF className="text-white" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 transition duration-300 transform hover:scale-110 hover:shadow-neon">
            <FaTwitter className="text-white" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition duration-300 transform hover:scale-110 hover:shadow-neon">
            <FaGoogle className="text-white" />
          </button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            {signIn ? "New to NFTribe?" : "Already a member?"}
          </p>
          <a
            onClick={toggleSignIn}
            href="#"
            className="text-purple-500 hover:text-purple-400 font-semibold transition duration-300"
          >
            {signIn ? "Create an account" : "Sign In now"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
