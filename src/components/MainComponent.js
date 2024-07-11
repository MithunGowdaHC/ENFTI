import React from 'react'

import Banner from './Banner'
import Header from './Header'
import TrendingAuction from './TrendingAuction'
import TopCollection from './TopCollection'
import FeaturedCreators from './FeaturedCreators'
import RecentActivity from './RecentActivity'
const MainComponent = () => {
  return (
    <>
    <div className=' ml-64'>
        <Header/>
    </div>

     <div className=' flex'>
    <div className=' w-[58%] ml-64 border-r-2'>
        <Banner/>
        <TrendingAuction/>
        <TopCollection/>
    </div>
    <div>
      <FeaturedCreators/>
      <RecentActivity/>
      
    </div>
    </div>
    
    </>
  )
}

export default MainComponent