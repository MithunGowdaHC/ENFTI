// sidebar
import React from "react";
import {
  FaHome,
  FaEnvelope,
  FaCog,
  FaStore,
  FaGavel,
  FaHeart,
  FaThList,
  FaWallet,
  FaHistory,
  FaQuestionCircle,
} from "react-icons/fa"; // Import icons
// import { userlogo } from "../utils/Constants";

import myLogo from "../utils/my-logo.jpg";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className=" fixed left-0 top-0  bottom-0 w-[270px] overflow-y-auto bg-white shadow-lg h-screen scroll-m-0  bg-gray-100 p-8">
      <div className="flex items-center space-x-1 mb-14">
        <img src={myLogo} className="w-14 h-14 p-1 rounded-full" alt="avatar" />
        <div>
          <h2 className="text-lg font-medium">Mithun Gowda</h2>
          <p className="text-gray-500">@mithun</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-sm">GENERAL</h2>

        <nav>
          <li className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <Link className=" flex items-center" to={"/dashboard"}>
              
              <FaHome className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <Link className=" flex items-center" to={"/message"}>
              <FaEnvelope className="mr-2" /> Message
            </Link>
          </li>
          <li className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <Link to={"/market"} className=" flex items-center">
            
              <FaStore className="mr-2"  /> Market
            </Link>
          </li>
         
        </nav>
      </div>

      <div className="mt-10">
        <h2 className="text-sm">MARKETPLACE</h2>

        <nav>
           <li className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <Link to={"./settings"} className=" flex items-center">
              <FaCog className="mr-2" /> Settings
            </Link>
          </li>
          <li className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <Link to={"./active-bid"} className=" flex items-center">
              <FaGavel className="mr-2" /> Active Bid
            </Link>
          </li>
          <li className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <Link to={"./saved"} className=" flex items-center">
              <FaHeart className="mr-2" /> Saved
            </Link>
          </li>
        </nav>
      </div>

      <div className="mt-10">
        <h2 className="text-sm">MY PROFILE</h2>
        <nav>
          <li className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <Link className=" flex items-center">
              <FaThList className="mr-2" /> Collection
            </Link>
          </li>
          <li className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <Link className=" flex items-center">
              <FaWallet className="mr-2" /> Wallet
            </Link>
          </li>
          <li className="flex  pointer   items-center py-2.5 text-lg px-4 rounded transition duration-200 hover:bg-gray-200">
            <Link className=" flex items-center">
              <FaHistory className="mr-2" /> History
            </Link>
          </li>
        </nav>
      </div>

      <div className="mt-10">
        <div className="p-4 bg-black rounded-lg">
          <h4 className="font-medium mb-2 text-white">Help Center</h4>
          <p className="text-gray-600 mb-4">
            Having trouble in Enefti? Please contact us for more questions.
          </p>
          <button className="w-full py-2 px-4 bg-white text-black rounded-lg flex items-center justify-center">
            <FaQuestionCircle className="mr-2" /> Go To Help Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
