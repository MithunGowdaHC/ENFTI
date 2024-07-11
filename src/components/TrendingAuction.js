// trending auction
import React from "react";
import { Card } from "./Card";
import { useState } from "react";
import { AuctionData } from "./AuctionData";

const TrendingAuction = () => {
  const [showAll, setshowAll] = useState(false);
  const handleViewAll = () => {
    setshowAll(!showAll);
  };
  return (
    <div className=" w-[90%]  ml-[36px] bg-white  shadow     mt-16  ">
      <div className="flex  justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Trending Auction</h2>
        <button onClick={handleViewAll} className="text-blue-500">
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-24  gap-x-[120px]">
        {AuctionData.slice(0, showAll ? AuctionData.length : 3).map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TrendingAuction;