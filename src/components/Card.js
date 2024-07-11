// card
import React from "react";

export const Card =({id,title,author,bid,image}) => {
    return(
       <div className=" rounded-xl w-[240px] m-auto shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
  <div className="relative">
    <img src={image} alt={title} className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"/>
    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
      <span className="font-semibold text-gray-800">{bid}</span>
    </div>
  </div>
  <div className="p-5">
    <h2 className="text-xl font-bold mb-2 text-gray-800 truncate">{title}</h2>
    <p className="text-sm text-gray-600 mb-4">By <span className="font-medium text-indigo-600">{author}</span></p>
    <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg">
      Place a Bid
    </button>
  </div>
</div>
        
    )

}