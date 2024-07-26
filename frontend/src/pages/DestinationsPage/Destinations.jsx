import React from 'react';
import locations from '../../data/locations2.json';
import Card from '../../components/Card/Card';
import './Destinations.css'

const Destinations = ({ popular }) => {
  // Filter destinations based on the popular prop
  let filteredLocations;
  if(popular)
    filteredLocations = locations.filter(location => location.popular === "true")  
  else  
    filteredLocations = locations;

  return (
    <div className="locations-container">
      {filteredLocations.map(({ name, tagline, image, history, distanceFromCity, whenToVisit, whoShouldVisit }) => (
        <Card
          key={name}
          name={name}
          tagline={tagline}
          image={image}
          history={history}
          distanceFromCity={distanceFromCity}
          whenToVisit={whenToVisit}
          whoShouldVisit={whoShouldVisit}
        />
      ))}
    </div>
  )
};

export default Destinations;
