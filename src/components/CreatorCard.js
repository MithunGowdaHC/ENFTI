import React from 'react';

const CreatorCard = ({ creator }) => {
  


  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-72 m-auto flex flex-col">
      <img src={creator.imageUrl} alt={creator.name} className="w-full h-40 p-4 object-cover rounded-t-lg" />
      <h3 className="text-lg font-semibold mt-2">{creator.name}</h3>
      <p className="text-gray-600 text-sm flex-grow">{creator.description}</p>
      <button  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        Follow
      </button>
    </div>
  );
};

export default CreatorCard;