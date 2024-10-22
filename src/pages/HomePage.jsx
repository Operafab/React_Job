import React from 'react'
import Hero from '../components/Hero'

import JobListings from '../components/JobListings'
import ViewJobs from '../components/VIewJobs'
import HomeCards from '../components/HomeCards'



const HomePage = () => {
  return (
    <>
      <Hero/>
      <HomeCards/>
      <JobListings isHome= {true}/>
      <ViewJobs/>

    </>
  )
}

export default HomePage
