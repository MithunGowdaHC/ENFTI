// featured creators
import React from 'react';
import { Link } from 'react-router-dom';
import CreatorCard from './CreatorCard';

const FeaturedCreators = () => {
  const featuredCreators = [
    {
      id: 1,
      name: 'Creator 1',
      description: 'A talented artist creating unique digital experiences.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH-PJgffjNFyoT7cdduSeBOIuYPb2r-TBsTii87bEVbI6zsllN4Vx1Uk3ulLh49X3Y0o&usqp=CAU'
    },
    // Add more featured creators as needed
  ];

  return (
    <section className=" p-10 w-[100%]  m-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Featured Creators</h2>
        <Link to="/all-creators" className="text-blue-500 hover:text-blue-700">See All</Link>
      </div>
      <div className="flex space-x-4 overflow-x-auto">
        {featuredCreators.map(creator => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCreators;