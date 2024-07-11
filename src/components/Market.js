import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { MarketData } from "./MarketData";

const DiscoverCard = ({
  id,
  title,
  artist,
  current_bid,
  time_left,
  image_url,
}) => {
  return (
    <div className="w-60 border border-gray-200 rounded-lg overflow-hidden">
      <img
        src={image_url}
        alt="NFT "
        className="w-full h-36 object-cover"
      />
      <div className="p-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-500">{time_left}</span>
          <span className="text-3xl">♡</span>
        </div>
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-gray-600 my-1">By {artist}</p>
        <div className="flex justify-between items-center mt-2">
          <div>
            <span className="text-xs text-gray-500">Current Bid</span>
            <p className="font-bold">{current_bid}</p>
          </div>
          <button className="bg-blue-500 text-white px-3 py-2 rounded text-sm">
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  );
};

const Market = () => {
  const [seemore, setseemore] = useState(false);

  const handleSeeMore = () => {
    setseemore(!seemore);
  };
  return (
    <>
      <div className=" ml-64">
        <Header />
      </div>
      <div className="flex">
        <Sidebar />
        <div className="ml-72 flex-1 p-8">
          <h1 className="text-3xl font-semibold mb-4">Discover</h1>
          <div className="flex gap-3">
            <button className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
              <span className="mr-2">☰</span>
              Category
            </button>
            <button className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
              <span className="mr-2">◯</span>
              Collection
            </button>
            <button className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
              <span className="mr-2">$</span>
              Price Range
            </button>
            <button className="flex items-center bg-gray-100 px-4 py-2 rounded-full ml-auto">
              <span className="mr-2">≡</span>
              Filter & Sort
            </button>
          </div>
          <div className=" bg-black text-white   my-3  rounded-2xl left-0 w-[90px] h-[30px]">
            <button  className=" p-1 " onClick={handleSeeMore}>
              {seemore ? "View less" : "View more"}
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {MarketData.slice(0, seemore ? MarketData.length : 9).map(
              (item, index) => (
                <DiscoverCard
                  key={index}
                  {...item}
                  title={item.title}
                  artist={item.artist}
                  current_bid={item.current_bid}
                  time_left={item.time_left}
                  image_url={item.image_url}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
