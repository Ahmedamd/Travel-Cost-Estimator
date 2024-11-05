// travelRoutes.js

const express = require('express');
const axios = require('axios');
const Amadeus = require('amadeus');
const router = express.Router();

// Initialize Amadeus API client (only if used for flights, or remove if not needed)
const amadeus = new Amadeus({
    clientId: process.env.AMADEUS_API_KEY,
    clientSecret: process.env.AMADEUS_API_SECRET
});

// Mock hotels route to generate random hotel data

router.get('/hotels', (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    
    const hotels = Array.from({ length: 5 }, (_, index) => ({
        name: `Hotel ${city} ${index + 1}`,
        address: `${index + 1} Main St, ${city}`,
        price: (Math.random() * (300 - 50) + 50).toFixed(2),  
        currency: 'USD'
    }));

    res.json({ city, hotels });  
});
// Keep the `/flights` endpoint for real flight data if needed
router.get('/flights', async (req, res) => {
    const { origin, destination, date } = req.query;

    try {
        const flightResponse = await amadeus.shopping.flightOffersSearch.get({
            originLocationCode: origin,
            destinationLocationCode: destination,
            departureDate: date,
            adults: '1',
            max: '5'
        });

        const flights = flightResponse.data.map(flight => ({
            price: flight.price.total,
            currency: flight.price.currency,
            departure: flight.itineraries[0].segments[0].departure.at,
            arrival: flight.itineraries[0].segments[0].arrival.at,
            duration: flight.itineraries[0].duration
        }));

        res.json({ origin, destination, date, flights });
    } catch (error) {
        console.error('Error fetching flight data:', error);
        res.status(500).json({ error: 'Failed to retrieve flight data' });
    }
});

module.exports = router;
