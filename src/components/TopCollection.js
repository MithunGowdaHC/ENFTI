// topcollection
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const topCollections = [
  { id: 1, name: 'Doodle Lucu', by: 'Doodles', volume: 14.32, change: 20.4, floorPrice: 2.3, owners: '2.2K', items: 18 },
  { id: 2, name: 'Kimawi Genesis', by: 'Kimawi - Japan', volume: 6.11, change: -18.2, floorPrice: 12.52, owners: '1.9K', items: 21 },
  // Add 8 more items here to have a total of 10
  { id: 3, name: 'Crypto Punks', by: 'Larva Labs', volume: 25.5, change: 5.7, floorPrice: 30.0, owners: '3.5K', items: 10000 },
  { id: 4, name: 'Bored Ape Yacht Club', by: 'Yuga Labs', volume: 40.2, change: -2.3, floorPrice: 70.5, owners: '6.0K', items: 10000 },
  { id: 5, name: 'Art Blocks', by: 'Art Blocks', volume: 8.7, change: 15.1, floorPrice: 0.5, owners: '5.1K', items: 1000 },
  { id: 6, name: 'CryptoKitties', by: 'Dapper Labs', volume: 3.2, change: -5.6, floorPrice: 0.1, owners: '100K', items: 2000000 },
  { id: 7, name: 'Meebits', by: 'Larva Labs', volume: 12.1, change: 8.9, floorPrice: 4.2, owners: '4.8K', items: 20000 },
  { id: 8, name: 'VeeFriends', by: 'Gary Vaynerchuk', volume: 7.5, change: -1.2, floorPrice: 15.0, owners: '7.2K', items: 10255 },
  { id: 9, name: 'Cool Cats', by: 'Cool Cats Team', volume: 5.8, change: 3.4, floorPrice: 2.8, owners: '5.5K', items: 9999 },
  { id: 10, name: 'Pudgy Penguins', by: 'Pudgy Penguins', volume: 4.3, change: 10.2, floorPrice: 1.7, owners: '4.3K', items: 8888 },
  { id: 11, name: 'Azuki', by: 'Chiru Labs', volume: 18.9, change: 7.6, floorPrice: 8.5, owners: '5.8K', items: 10000 },
  { id: 12, name: 'Doodles', by: 'Doodles', volume: 9.7, change: -3.8, floorPrice: 5.2, owners: '6.1K', items: 10000 },
  { id: 13, name: 'CloneX', by: 'RTFKT', volume: 22.3, change: 12.5, floorPrice: 10.1, owners: '7.5K', items: 20000 },
  { id: 14, name: 'Moonbirds', by: 'Proof Collective', volume: 15.6, change: -6.2, floorPrice: 7.8, owners: '6.3K', items: 10000 },
  { id: 15, name: 'World of Women', by: 'WoW', volume: 6.8, change: 9.3, floorPrice: 3.1, owners: '5.0K', items: 10000 },
  { id: 16, name: 'Invisible Friends', by: 'Markus Magnusson', volume: 8.2, change: 4.7, floorPrice: 2.9, owners: '4.7K', items: 5000 },
  { id: 17, name: 'Goblintown', by: 'Truth Labs', volume: 3.9, change: -8.1, floorPrice: 1.2, owners: '4.1K', items: 10000 },
  { id: 18, name: 'Cryptoadz', by: 'Gremplin', volume: 5.1, change: 2.8, floorPrice: 1.9, owners: '3.8K', items: 6969 },
  { id: 19, name: 'Deadfellaz', by: 'Betty', volume: 4.7, change: 6.5, floorPrice: 1.5, owners: '4.5K', items: 10000 },
  { id: 20, name: 'Milady Maker', by: 'Remilia Collective', volume: 7.3, change: -2.9, floorPrice: 3.7, owners: '3.9K', items: 10000 },
];

const TopCollection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedCollections = showAll ? topCollections : topCollections.slice(0, 2);

  return (
    <div className="bg-white p-4 w-3/4 mx-auto rounded-lg mt-16 shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Top Collection</h2>
        <button 
          onClick={() => setShowAll(!showAll)} 
          className="text-blue-500 text-sm hover:underline"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 text-sm">
            <th className="pb-2">Collection</th>
            <th className="pb-2">Volume</th>
            <th className="pb-2">24h %</th>
            <th className="pb-2">Floor Price</th>
            <th className="pb-2">Owners</th>
            <th className="pb-2">Items</th>
          </tr>
        </thead>
        <tbody>
          {displayedCollections.map((collection) => (
            <tr key={collection.id} className="border-t border-gray-100">
              <td className="py-2 flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                  <FaUser className="text-gray-500" />
                </div>
                <div>
                  <div className="font-medium">{collection.name}</div>
                  <div className="text-xs text-gray-500">By {collection.by}</div>
                </div>
              </td>
              <td className="py-2">$ {collection.volume.toFixed(2)}</td>
              <td className={`py-2 ${collection.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {collection.change >= 0 ? '+' : ''}{collection.change.toFixed(1)}%
              </td>
              <td className="py-2">$ {collection.floorPrice.toFixed(2)}</td>
              <td className="py-2">{collection.owners}</td>
              <td className="py-2">{collection.items}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopCollection;