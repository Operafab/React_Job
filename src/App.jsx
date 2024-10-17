import React from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

const App = () => {
  return (
    <>
     <Navbar />
      <HomePage />
      <HomeCards/>
      <JobListings/>
    </>
  )
}

export default App;
