// bookingRoutes.js

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Booking route to create a new booking
router.post('/', bookingController.createBooking);

// Route to get user with their bookings
router.get('/:email', bookingController.getUserWithBookings);

module.exports = router;
