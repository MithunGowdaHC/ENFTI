import React from 'react'
import { FaSearch, FaEthereum, FaBell, FaUserCircle } from 'react-icons/fa'; // Import icons

const Header = () => {
  return (
    <div className="flex justify-between items-center  bg-white shadow m-3 p-4">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search items, collections, and users"
          className="border rounded-full py-2 px-4 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className=" text-gray-500 pl-3 text-3xl " />
      </div>
      <div className="flex items-center space-x-4 mr-4">
        <div className="flex items-center border  border-2  rounded-lg border-white mr-4">
          <FaEthereum className="text-gray-500 text-2xl  " />
          <span className="font-medium border border-white p-5  ">3,421 ETH</span>
        </div>
        <FaBell className="text-gray-500 text-2xl mr-2" />
        <FaUserCircle className="text-gray-500  text-2xl mr-2" />
      </div>
    </div>
  )
}

export default Header