// BookingDetails.jsx
import React from 'react';
import Itinerary from './Itinerary';

const BookingDetails = ({ pck, itinerary }) => {
    return (
        <div className="booking-details">
            <img src={pck.image} alt="" srcset="" />
            <hr />
            <h2>{pck.package_name}</h2>
            <p>Price - {pck.price}</p>
            <p>Duration - {pck.duration}</p>
            <p>Locations covered - {pck.locations_covered.join(',')}</p>
            <p>{pck.description}</p>
            {/* Check if itinerary is defined before rendering */}
            {itinerary && <Itinerary itinerary={itinerary} />}
        </div>
    );
};

export default BookingDetails;
