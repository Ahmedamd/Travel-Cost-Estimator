// app.js
require('dotenv').config();

const express = require('express');

const travelRoutes = require('./routes/travelRoutes'); // Importing the routes
const app = express();
const cors = require('cors');
app.use(cors());





// Middleware to parse JSON
app.use(express.json());

// Use travel routes
app.use('/api/travel', travelRoutes);

// Start the server on the specified port (5200)
const PORT = process.env.PORT || 5200;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
