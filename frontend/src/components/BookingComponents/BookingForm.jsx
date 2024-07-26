import React, { useState } from 'react';

const BookingForm = ({ handleSubmit, totalPrice, gst, personCount, setPersonCount, totalAmount }) => {
    const [date, setDate] = useState(''); // Add a state for the date

    return (
        <div className="booking-container-right">
            <h1>Booking</h1>
            {/* Booking form */}
            <form className="booking-form" onSubmit={(e) => handleSubmit(e, date)}>
                <label>Enter Date: </label>
                <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <label>Enter Number of People: </label>
                <input
                    type="number"
                    placeholder="Enter Number of People"
                    value={personCount}
                    onChange={e => setPersonCount(Math.max(0, parseInt(e.target.value)))}
                    min="0"
                    required
                />
                <hr />
                <p>Price : {totalPrice}</p>
                <p>GST: {(gst * 100).toFixed(2)}%</p>
                <p>Total Price : {totalAmount} (including GST)</p>
                <button type="submit">BOOK</button>
            </form>
        </div>
    );
};

export default BookingForm;
