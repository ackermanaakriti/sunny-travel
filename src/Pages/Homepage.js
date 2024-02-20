import React from 'react'
import Layout from '../Layout'
import '../Styles/Style.css'
import '../Sections/section.css'
import { HeropageSection } from '../Sections/HomepageSection/HeropageSection'
import SearchDestinationssection from '../Sections/HomepageSection/SearchDestinationssection'
import TopVacationSwiper  from '../Components/Swiper/TopVacationSwiper'
import TopVacationDesti from '../Sections/HomepageSection/TopVacationDesti'
import ExploreActivities from '../Sections/HomepageSection/ExploreActivities'
import Majesticpeaks from '../Sections/HomepageSection/Majesticpeaks'
import OurTrendingPackages from '../Sections/HomepageSection/OurTrendingPackages'
import FeedBack from '../Sections/HomepageSection/FeedBack'

const Homepage = () => {
  return (
   <Layout>
    <HeropageSection/>
    <SearchDestinationssection/>
  <TopVacationDesti/>
  <ExploreActivities/>
  <Majesticpeaks/>
  <OurTrendingPackages/>
  <FeedBack/>
   </Layout>
  )
}

export default Homepage