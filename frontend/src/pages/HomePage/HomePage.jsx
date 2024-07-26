import React from 'react'
import Header from '../../components/Header/Header'
// import backgroundImage from '../assets/backgroundImage.jpg'
import backgroundImage from '../../assets/bg.jpg'
import '../../styles/app.css'
import '../HomePage/HomePage.css'
import Destinations from '../DestinationsPage/Destinations'


const HomePage = () => {
  return (
    <>
      {/* <Header/> */}
      <section className="home">
        <div className="content">
          <img src={backgroundImage} alt="background"/>
          <h1>WanderLust</h1>
          <h2>Your Travel Planner</h2>
        </div>
        <div className="home-page-container">
          {/* tagline */}
            <div className="tagline">
                <h2>Explore the Wonders of Southern India</h2>
                <p>Plan your dream vacation to enchanting destinations</p>
            </div>
            <div className="popular-locations">
                <h3>Popular Destinations</h3>
                <Destinations popular="true"/>
            </div>
        </div>
      </section>
    </>
  )
}

export default HomePage