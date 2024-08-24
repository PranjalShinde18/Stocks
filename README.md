# Stalky - Stock Portfolio Tracker

## Overview

The Stock Portfolio Tracker is a comprehensive web application that allows users to monitor and track stocks listed on the NSE (National Stock Exchange). Users can view top picks, gainers, and losers, track individual stocks with detailed fundamental information, manage a Wishlist, and observe the portfolios of top investors. The project leverages web scraping and financial data APIs to provide real-time data and insights.

## Features

- **Top Picks, Gainers, and Losers**: Users can view the most popular, top-performing, and underperforming stocks on the NSE.
- **Stock Tracking**: Users can track individual stocks and view their fundamental details, including PE ratio, PB ratio, OHLCV (Open, High, Low, Close, Volume), and stakeholder information.
- **Wishlist**: Users can add desired stocks to a Wishlist for easy access and monitoring.
- **Top Investors' Portfolio**: Users can track the portfolios of top investors and gain insights into their investment strategies.
- **Real-time Data**: Integration with web scraping (Puppeteer) and financial data API (yfinance) ensures that the stock data is up-to-date and accurate.

## Tech Stack

- **Frontend**: React, TypeScript, JavaScript
- **Backend**: Node.js, Express, JavaScript
- **Database**: MongoDB
- **Web Scraping**: Puppeteer
- **Financial Data API**: yfinance
- **Authentication**: JWT (JSON Web Token)

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB
- Python (for Flask and yfinance)
- npm or yarn

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/PranjalShinde18/Stocks
   cd stock-portfolio-tracker
   ```

2. **Install dependencies:**

   - For the Node.js backend:
     ```bash
     cd server
     npm install
     ```

   - For the React frontend:
     ```bash
     cd client
     npm install
     ```


3. **Set up environment variables:**

   Create a `.env` file in the `server` and `client` directories. Set up the required environment variables:

   - **Backend (`server/.env`):**
     ```plaintext
     MONGO_URI=mongodb://localhost:27017/yourdbname
     JWT_SECRET=your_jwt_secret_key
     ```

   - **Frontend (`client/.env`):**
     ```plaintext
     REACT_APP_API_URL=http://localhost:5000
     ```

4. **Run the services:**

   - **Start the backend server:**
     ```bash
     cd server
     npm start
     ```

   - **Start the frontend server:**
     ```bash
     cd client
     npm start
     ```

5. **Access the application:**

   Open your browser and navigate to `http://localhost:3000`.

## Usage

- **View Top Picks, Gainers, and Losers:** Explore the market's top-performing stocks.
- **Track Stocks:** Add stocks to your tracking list and view their fundamental details.
- **Manage Wishlist:** Add and remove stocks from your Wishlist for easy monitoring.
- **Monitor Top Investors:** View and analyze the portfolios of successful investors.
