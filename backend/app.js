const express = require('express');
const cors = require('cors');
const authRoutes = require('./router/authRoutes');
const userRoutes = require('./router/userRoutes');
const bookingRoutes = require('./router/bookingRoutes');
require('dotenv').config();

const app = express();

// Allow all origins
app.use(cors());

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/Bookings', bookingRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
