import React, { useState } from "react";
export const RecentData = [
  {
    id: 1,
    name: "Uzachi #4390",
    collection: "Ragnarok Meta",
    value: "2.15 ETH",
    imageUrl: "https://via.placeholder.com/50/000000/FFFFFF?text=Uzachi", // Black background, white text
  },
  {
    id: 2,
    name: "Doodles #3486",
    collection: "Doodles",
    value: "4.42 ETH",
    imageUrl: "https://via.placeholder.com/50/808080/FFFFFF?text=Doodles", // Grey background, white text
  },
  {
    id: 3,
    name: "Murakami #2766",
    collection: "Murakami",
    value: "1.08 ETH",
    imageUrl: "https://via.placeholder.com/50/FFFFFF/000000?text=Murakami", // White background, black text
  },
  {
    id: 4,
    name: "Doodles #2761",
    collection: "Murakami",
    value: "4.4 ETH",
    imageUrl: "https://via.placeholder.com/50/000000/808080?text=Doodles", // Black background, grey text
  },
  {
    id: 5,
    name: "Peachy Puch#22",
    collection: "Mindblownstudio",
    value: "5.62 ETH",
    imageUrl: "https://via.placeholder.com/50/808080/000000?text=Peachy", // Grey background, black text
  },
  {
    id: 6,
    name: "Gemmy #3723",
    collection: "GemmySolana",
    value: "5.32 ETH",
    imageUrl: "https://via.placeholder.com/50/FFFFFF/808080?text=Gemmy", // White background, grey text
  },
  {
    id: 7,
    name: "Satoshi #3421",
    collection: "CryptoPunks",
    value: "8.75 ETH",
    imageUrl: "https://via.placeholder.com/50/333333/FFFFFF?text=Satoshi", // Dark grey background, white text
  },
  {
    id: 8,
    name: "Ether #1010",
    collection: "EtherCards",
    value: "7.89 ETH",
    imageUrl: "https://via.placeholder.com/50/4F4F4F/FFFFFF?text=Ether", // Medium grey background, white text
  },
  {
    id: 9,
    name: "Nakamoto #5566",
    collection: "Bitcoin Origins",
    value: "6.45 ETH",
    imageUrl: "https://via.placeholder.com/50/5A5A5A/FFFFFF?text=Nakamoto", // Another shade of grey background, white text
  },
  {
    id: 10,
    name: "Vitalik #2020",
    collection: "Ethereum Legends",
    value: "9.99 ETH",
    imageUrl: "https://via.placeholder.com/50/696969/FFFFFF?text=Vitalik", // Grey background, white text
  },
];


const RecentActivity = () => {
  const [seeAll, setSeeAll] = useState(false);

  const displayActivity = seeAll ? RecentData : RecentData.slice(0, 5);
  return (
    <div className="bg-gray-100 shadow-lg w-[85%] m-auto p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Recent Activity</h1>
        <button
          onClick={() => {
            setSeeAll(!seeAll);
          }}
          className="text-blue-500 text-sm hover:underline"
        >
          {seeAll ? "Show less" : "See all"}
        </button>
      </div>
      <div>
        {displayActivity.map((data) => (
          <div key={data.id} className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow">
            <div className="flex items-center">
              <img src={data.imageUrl} alt={data.name} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="font-bold">{data.name}</p>
                <p className="text-sm text-gray-600">From {data.collection}</p>
              </div>
            </div>
            <p className="font-bold">{data.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
