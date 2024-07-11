// banner
import React from 'react'

const Banner = () => {
  return (
    <div className="bg-cover bg-center py-16 px-20 w-5/6 mt-10 m-auto px-8 rounded-lg backdrop-blur-10 text-white" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1397366335/photo/graphics-cards-in-rig-for-ethereum-mining-farm-on-background-stock-market-eth-chart.jpg?s=612x612&w=0&k=20&c=I_ZXaqWJ8k7NFvJxCDwcwkAK976o34X9p0ZzrhwOTEA=)' }}>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">Create and Sell Extraordinary NFTs</h1>
        <p className="text-lg mb-8">The world's first and largest digital marketplace for crypto NFTs</p>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Explore More
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Sell Artwork
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
