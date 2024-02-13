import React from 'react'
import Layout from '../Layout'
import '../Styles/Style.css'
import '../Sections/section.css'
import { HeropageSection } from '../Sections/HomepageSection/HeropageSection'
import SearchDestinationssection from '../Sections/HomepageSection/SearchDestinationssection'

const Homepage = () => {
  return (
   <Layout>
    <HeropageSection/>
    <SearchDestinationssection/>
   </Layout>
  )
}

export default Homepage