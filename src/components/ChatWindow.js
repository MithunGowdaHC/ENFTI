

import React from "react";
import { FaPaperPlane } from 'react-icons/fa';

const ChatWindow = () => {
  return (
    <div className="w-5/12 p-12 mt-7 mx-auto bg-gray-100 rounded-lg shadow-lg">
      <div className="space-y-10">
        <div className="flex flex-col items-start">
          <p className="bg-gray-300 text-black p-6 rounded-t-3xl w-[60%] rounded-r-3xl shadow-md">
            Amateurs think about how much money they can make. Professionals think
            about how much money they could lose.
          </p>
          <span className="text-sm text-gray-500 mt-2">4:26 AM</span>
        </div>

        <div className="flex flex-col items-end">
          <p className="bg-black text-white p-6 rounded-t-3xl w-[60%] rounded-l-3xl shadow-md">
            The price of a commodity will never go to zero. When you invest in
            commodities futures, you are not buying a piece of paper that says you
            own an intangible of the company that can go bankrupt 😌.
          </p>
          <span className="text-sm text-gray-500 mt-2">4:30 AM</span>
        </div>

        <div className="flex flex-col items-start">
          <p className="bg-gray-300 text-black p-6 rounded-t-3xl w-[60%] rounded-r-3xl shadow-md">
            Amateurs think about how much money they can make. Professionals think
            about how much money they could lose.
          </p>
          <span className="text-sm text-gray-500 mt-2">4:35 AM</span>
        </div>

        <div className="flex flex-col items-end">
          <p className="bg-black text-white p-6 rounded-t-3xl w-[60%] rounded-r-3xl shadow-md">
            It's not always easy to do what's not popular, but that's where you make
            your money. Buy stocks that look bad to less careful investors and hang
            on until their real value is recognized.
          </p>
          <span className="text-sm text-gray-500 mt-2">4:40 AM</span>
        </div>

        <div className="flex flex-col items-start">
          <p className="bg-gray-300 text-black p-6 rounded-t-3xl w-[60%] rounded-r-3xl shadow-md">
            99%+ of traders don't care about Ferraris and yachts. They just want to
            pay their bills, save a little extra money, and sleep well at night. The
            only way to do that is to bat 70% or more. Anything less, and these
            goals are nothing more than fantasy.
          </p>
          <span className="text-sm text-gray-500 mt-2">5:22 AM</span>
        </div>
      </div>

      <div className="mt-6 flex">
  <input
    placeholder="Write a new message"
    className="bg-white border-black border-2 flex-grow h-12 p-4 rounded-l-lg text-black placeholder-gray-600"
  />
  <button className="bg-black text-white px-6 rounded-r-lg flex items-center justify-center">
    <FaPaperPlane className="w-5 h-5" />
  </button>
</div>
    </div>
  );
};

export default ChatWindow;
