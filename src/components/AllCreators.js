import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import CreatorCard from './CreatorCard';
import FeaturedCreators from './FeaturedCreators';
import { FaX } from 'react-icons/fa6';

const AllCreators = () => {
  const allCreators = [
    {
      id: 1,
      name: 'Pixel Master',
      description: 'Creating vibrant pixel art worlds',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH-PJgffjNFyoT7cdduSeBOIuYPb2r-TBsTii87bEVbI6zsllN4Vx1Uk3ulLh49X3Y0o&usqp=CAU',
      twitter: '@pixelmaster',
      instagram: '@pixel.master'
    },
    // Add 14-19 more creators here with similar structure but different names, descriptions, and social handles
    // For example:
    {
      id: 2,
      name: 'Neon Dreams',
      description: 'Cyberpunk-inspired digital illustrations',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH-PJgffjNFyoT7cdduSeBOIuYPb2r-TBsTii87bEVbI6zsllN4Vx1Uk3ulLh49X3Y0o&usqp=CAU',
      twitter: '@neondreams',
      instagram: '@neon.dreams'
    },
    {
      id: 3,
      name: 'Neon Dreams',
      description: 'Cyberpunk-inspired digital illustrations',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH-PJgffjNFyoT7cdduSeBOIuYPb2r-TBsTii87bEVbI6zsllN4Vx1Uk3ulLh49X3Y0o&usqp=CAU',
      twitter: '@neondreams',
      instagram: '@neon.dreams'
    },
    {
      id: 4,
      name: 'Neon Dreams',
      description: 'Cyberpunk-inspired digital illustrations',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH-PJgffjNFyoT7cdduSeBOIuYPb2r-TBsTii87bEVbI6zsllN4Vx1Uk3ulLh49X3Y0o&usqp=CAU',
      twitter: '@neondreams',
      instagram: '@neon.dreams'
    },
    {
      id: 5,
      name: 'Neon Dreams',
      description: 'Cyberpunk-inspired digital illustrations',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH-PJgffjNFyoT7cdduSeBOIuYPb2r-TBsTii87bEVbI6zsllN4Vx1Uk3ulLh49X3Y0o&usqp=CAU',
      twitter: '@neondreams',
      instagram: '@neon.dreams'
    },
    {
      id: 6,
      name: 'Neon Dreams',
      description: 'Cyberpunk-inspired digital illustrations',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH-PJgffjNFyoT7cdduSeBOIuYPb2r-TBsTii87bEVbI6zsllN4Vx1Uk3ulLh49X3Y0o&usqp=CAU',
      twitter: '@neondreams',
      instagram: '@neon.dreams'
    },
    {
      id: 7,
      name: 'Neon Dreams',
      description: 'Cyberpunk-inspired digital illustrations',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH-PJgffjNFyoT7cdduSeBOIuYPb2r-TBsTii87bEVbI6zsllN4Vx1Uk3ulLh49X3Y0o&usqp=CAU',
      twitter: '@neondreams',
      instagram: '@neon.dreams'
    },
    {
      id: 8,
      name: 'Neon Dreams',
      description: 'Cyberpunk-inspired digital illustrations',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH-PJgffjNFyoT7cdduSeBOIuYPb2r-TBsTii87bEVbI6zsllN4Vx1Uk3ulLh49X3Y0o&usqp=CAU',
      twitter: '@neondreams',
      instagram: '@neon.dreams'
    },
    {
      id: 9,
      name: 'Neon Dreams',
      description: 'Cyberpunk-inspired digital illustrations',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH-PJgffjNFyoT7cdduSeBOIuYPb2r-TBsTii87bEVbI6zsllN4Vx1Uk3ulLh49X3Y0o&usqp=CAU',
      twitter: '@neondreams',
      instagram: '@neon.dreams'
    },
    {
      id: 10,
      name: 'Neon Dreams',
      description: 'Cyberpunk-inspired digital illustrations',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH-PJgffjNFyoT7cdduSeBOIuYPb2r-TBsTii87bEVbI6zsllN4Vx1Uk3ulLh49X3Y0o&usqp=CAU',
      twitter: '@neondreams',
      instagram: '@neon.dreams'
    },
    
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">Discover Amazing Creators</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {allCreators.map(creator => (
          <div key={creator.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={creator.imageUrl} alt={creator.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">{creator.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{creator.description}</p>
              <div className="flex justify-between items-center">
                <button className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 transition duration-300">
                  Follow
                </button>
                <div className="flex space-x-2">
                  <a href={`https://twitter.com/${creator.twitter}`} className="text-black hover:text-blue-500">
                    <FaX  size={20} />
                  </a>
                  <a href={`https://instagram.com/${creator.instagram}`} className="text-pink-500 hover:text-pink-600">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCreators;