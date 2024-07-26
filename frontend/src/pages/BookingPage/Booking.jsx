import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import packages from '../../data/packages.json';
import { ToastContainer } from 'react-toastify';
import { gst } from '../../data/Constants';
import BookingForm from '../../components/BookingComponents/BookingForm';
import BookingDetails from '../../components/BookingComponents/BookingDetails';
import Itinerary from '../../components/BookingComponents/Itinerary';
import './Booking.css';

const Booking = () => {
    const location = useLocation();
    const { packageName } = location.state;
    const pck = packages.find(p => packageName === p.package_name);
    const itinerary = pck.itinerary;
    const [personCount, setPersonCount] = useState(1);
    const [date, setDate] = useState(''); // Add a state for the date
    const totalPrice = Number(pck.price.replace(',', '').substring(1)) * Number(personCount);
    const gstAmount = totalPrice * gst;
    const totalAmount = totalPrice + gstAmount;

    // Handling submit button for booking
    const handleSubmit = async (e, date) => {
        e.preventDefault();
        const confirmationMessage = `Booking details:\nPrice per person: ${pck.price}\nGST: ${(gst * 100).toFixed(2)}%\nNumber of persons: ${personCount}\nDate: ${date}\nTotal Price (including GST): ${totalAmount}`;
        confirm(confirmationMessage);

        // Booking object
        const bookingData = {
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            packageName: pck.package_name,
            price: pck.price,
            gst: gst,
            personCount: personCount,
            totalAmount: totalAmount,
            date: date // Include the date here
        };

        try {
            // Make POST request to the API
            const response = await fetch('http://localhost:7000/api/Bookings/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });

            // Check for errors while saving
            if (!response.ok) {
                throw new Error('Failed to save booking');
            }
            localStorage.setItem('bookedPackage', pck.package_name);
        } catch (error) {
            // Handle error
            console.error('Error saving booking:', error.message);
        }
    };

    return (
        <div className="booking-container">
            <ToastContainer position='top-center'/>
            <BookingDetails pck={pck} />
            <div className="column">
                <Itinerary itinerary={itinerary} />
                <BookingForm
                    handleSubmit={handleSubmit}
                    totalPrice={totalPrice}
                    gst={gst}
                    personCount={personCount}
                    setPersonCount={setPersonCount}
                    totalAmount={totalAmount}
                    setDate={setDate} // Pass the setDate function as a prop
                />
            </div>
        </div>
    );
};

export default Booking;
