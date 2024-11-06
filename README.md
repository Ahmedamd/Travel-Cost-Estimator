# Travel Cost Estimator

The Travel Cost Estimator is a web application that calculates estimated travel expenses, including flights, hotels, and food costs, based on user-inputted city data. Additionally, it suggests nearby cities for budget comparison, helping users plan their trips more efficiently by utilizing real-time data from external APIs.

![Travel](https://github.com/user-attachments/assets/b4b76e88-a807-4f05-a38c-5f27ea0e3857)

## Features

- **Expense Calculation**: Provides estimated costs for flights, hotels, and food based on the selected city.
- **Nearby City Suggestions**: Offers cost comparisons with nearby cities to help users find budget-friendly options.
- **Real-Time Data**: Utilizes external APIs to ensure accurate and up-to-date information.

## Tech Stack

- **Front-end**: React.js
- **Back-end**: Node.js, Express.js
- **APIs**:
  - **Amadeus**: For flight pricing and availability.
  - **Yelp**: For local food and restaurant prices.
  - **OpenCageData**: For location data and geocoding.

## Installation

1. **Clone the repository**:
```bash
git clone https://github.com/ahmedamd/Travel-Cost-Estimator.git
```
2. **Navigate to the project folder:**
``` bash
  cd Travel-Cost-Estimator/myapp

```

3. **Install dependencies:**
```bash
npm install
```
4. **Set up API keys:** Set up API keys:
Create a .env file in the root directory.
Add your API keys for Amadeus, Yelp, and OpenCageData:
```bash
REACT_APP_AMADEUS_API_KEY=your_amadeus_api_key
REACT_APP_YELP_API_KEY=your_yelp_api_key
REACT_APP_OPENCAGEDATA_API_KEY=your_opencagedata_api_key
```

5. **Run the development server:**
```bash
npm start
```

## Usage

- Enter the city: Input the city where you plan to travel.
- View Estimated Costs: Get a breakdown of estimated expenses for flights, hotels, and food.
- Explore Nearby Options: Compare costs with suggested nearby cities for a more budget-friendly choice.

## License

This project is licensed under the MIT License.

