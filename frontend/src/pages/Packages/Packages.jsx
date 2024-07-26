import React from 'react'
import packages from '../../data/packages.json'
import Packag from '../../components/Package/Packag';

const Packages = () => {
    return (
        <div className="locations-container">
          {/* mapping over elements of packages.json */}
          {packages.map(({ package_name, locations_covered, image, description,itinerary,price }) => (
            <Packag
              key={package_name}
              name={package_name}
              locations={locations_covered.join(',')}
              image={image}
              description={description}
              price={price}
              itinerary={itinerary}
            />
          ))}
        </div>
      );
}

export default Packages;