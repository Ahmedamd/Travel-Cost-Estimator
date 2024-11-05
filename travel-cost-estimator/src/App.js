import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false);

    // Function to fetch hotel data
    const handleFetchData = async () => {
        if (!origin || !destination || !date) {
            alert("Please fill in all fields");
            return;
        }

        setLoading(true);
        setHotels([]);

        try {
            // Fetch random hotel data based on the destination city
            const hotelResponse = await axios.get('http://localhost:5200/api/travel/hotels', {
                params: { city: destination }
            });
            setHotels(hotelResponse.data.hotels || []);
        } catch (error) {
            console.error('Error fetching hotels:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1>Travel Cost Estimator</h1>
            <div style={styles.inputContainer}>
                <label>Origin (City Name):</label>
                <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="e.g., New York"
                    style={styles.input}
                />
            </div>
            <div style={styles.inputContainer}>
                <label>Destination (City Name):</label>
                <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g., Toronto"
                    style={styles.input}
                />
            </div>
            <div style={styles.inputContainer}>
                <label>Travel Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={styles.input}
                />
            </div>

            <button onClick={handleFetchData} style={styles.button} disabled={loading}>
                {loading ? 'Loading...' : 'Estimate Costs'}
            </button>

            <div style={styles.results}>
                <h2>Hotels</h2>
                {hotels.length > 0 ? (
                    hotels.map((hotel, index) => (
                        <div key={index} style={styles.hotelCard}>
                            <p><strong>{hotel.name}</strong></p>
                            <p>Address: {hotel.address}</p>
                            <p>Price: ${hotel.price} USD</p>
                        </div>
                    ))
                ) : <p>No hotels found.</p>}
            </div>
        </div>
    );
};

// Basic styling
const styles = {
    container: { maxWidth: '600px', margin: '0 auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' },
    inputContainer: { marginBottom: '15px' },
    input: { padding: '8px', marginTop: '5px', width: '100%' },
    button: { padding: '10px 20px', margin: '20px 0', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' },
    results: { textAlign: 'left', marginTop: '20px' },
    hotelCard: { padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }
};

export default App;
