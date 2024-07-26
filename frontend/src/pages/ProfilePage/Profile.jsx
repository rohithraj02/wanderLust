import React, { useState, useEffect } from 'react';
import female from '../../assets/ladyAvatar.jpg';
import male from '../../assets/manAvatar.jpg';
import './Profile.css';
import { useAuth } from '../../components/AuthContext';

const Profile = () => {
  // Getting user details from AuthContext
  const { isLoggedIn } = useAuth();
  const { gender, name, email } = localStorage;
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (isLoggedIn && email) {
      fetchBookings(email);
    }
  }, [isLoggedIn, email]);

  const fetchBookings = async (email) => {
    try {
      const response = await fetch(`http://localhost:7000/api/Bookings/${email}`);
      const data = await response.json();
      console.log('Fetched data:', data);
      
      if (!data.error) {
        const bookings = data.data.bookings;
        // Extracting package names
        const packages = bookings.map(booking => booking.packageName);
        setBookings(packages);
        console.log(bookings)
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  return (
    <div className='profile'>
      <h1>Profile</h1>
      {/* Changing avatar based on gender */}
      {gender === 'male' ? (
        <img src={male} alt='Male avatar' />
      ) : (
        <img src={female} alt='Female avatar' />
      )}
      {/* Displaying user details */}
      <div className='user-details'>
        <p>Name: {isLoggedIn ? name : 'Not logged in'}</p>
        <p>Email: {isLoggedIn ? email : 'Not logged in'}</p>
        <div>
          <p>Booked packages:</p>
          {isLoggedIn ? (
            bookings.length > 0 ? (
              bookings.map((pkg, index) => (
                <div key={index}>
                    {pkg}
                </div>
              ))
            ) : (
              <p>No bookings found</p>
            )
          ) : (
            <p>Not logged in</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
