// bookingController.js

const bookingService = require('../services/bookingServices');
const { errorLogger, infoLogger } = require('../services/loggers');
const { LOGGER_LEVEL0, LOGGER_LEVEL2 } = require('dotenv').config().parsed;

// Create new booking after user submits booking details
exports.createBooking = async (req, res) => {
    try {
        await bookingService.saveBooking(req.body);
        infoLogger[LOGGER_LEVEL2]('Booking saved successfully', req.body);
        res.json({ error: false, message: 'Booking saved successfully' });
    } catch (error) {
        errorLogger[LOGGER_LEVEL0]('Error in saving the booking');
        res.json({ error: true, message: 'Error in saving the booking' });
    }
};

// Get user with their bookings
exports.getUserWithBookings = async (req, res) => {
    const { email } = req.params;
    console.log(email)
    try {
        const userWithBookings = await bookingService.getUserWithBookings(email);
        if (userWithBookings) {
            infoLogger[LOGGER_LEVEL2](`Retrieved user and bookings for email: ${email}`);
            res.json({ error: false, data: userWithBookings });
        } else {
            infoLogger[LOGGER_LEVEL2](`No user found with email: ${email}`);
            res.json({ error: true, message: 'No user found' });
        }
    } catch (error) {
        errorLogger[LOGGER_LEVEL0](`Error in retrieving user with bookings for email: ${email}`);
        res.json({ error: true, message: 'Error in retrieving user with bookings' });
    }
};
