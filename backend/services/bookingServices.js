const { MongoClient } = require('mongodb');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;
const client = new MongoClient(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectToDatabase() {
    if (!db) {
        await client.connect();
        db = client.db();
    }
    return db;
}

async function connectToUserCollection() {
    const db = await connectToDatabase();
    return db.collection('users');
}

// Service for saving booking details to MongoDB
exports.saveBooking = async (bookingData) => {
    try {
        const db = await connectToDatabase();
        const bookingsCollection = db.collection('bookings');
        await bookingsCollection.insertOne(bookingData);
        return 'Booking saved successfully';
    } catch (error) {
        console.error('Error saving booking:', error);
        throw error;
    }
};

exports.getUserWithBookings = async (email) => {
    try {
        const userCollection = await connectToUserCollection();
        const user = await userCollection.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const db = await connectToDatabase();
        const bookingCollection = db.collection('bookings');
        const bookings = await bookingCollection.find({ email }).toArray();
        user.bookings = bookings;
        delete user.password;
        return user;
    } catch (error) {
        console.error('Error retrieving user with bookings:', error);
        throw error;
    }
};
