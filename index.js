import express from 'express';
import fetch from 'node-fetch';

/**
 * ScraperAPI Sample Usage
 
 * http://api.scraperapi.com/?api_key=7f67afa5ed3beed9619dbf4c848b6642&autoparse=true&url=https://www.amazon.com/dp/B08N5KWB9H
 *
 * https://api.scraperapi.com/
 *      ?api_key=7f67afa5ed3beed9619dbf4c848b6642
 *      &autoparse=true
 *      &url=https://www.amazon.com/dp/B08N5KWB9H
 */
const apiKey = '7f67afa5ed3beed9619dbf4c848b6642';
const apiBaseUrl = `http://api.scraperapi.com/?api_key=${apiKey}&autoparse=true`;
const apiTargetUrl = 'https://www.amazon.com';

// define port
const PORT = process.env.PORT || 5000;

// init app
const app = express();

// use json serializing
app.use(express.json());

// define default route
app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scraper API.');
});

// GET Product Details
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const response = await fetch(
            `${apiBaseUrl}&url=${apiTargetUrl}/dp/${productId}`
        );

        res.json(await response.json());
    } catch (error) {
        res.json(error);
    }
});

// GET Product Reviews
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;

    try {
        const response = await fetch(
            `${apiBaseUrl}&url=${apiTargetUrl}/product-reviews/${productId}`
        );

        res.json(await response.json());
    } catch (error) {
        res.json(error);
    }
});

// GET Product Reviews
app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;

    try {
        const response = await fetch(
            `${apiBaseUrl}&url=${apiTargetUrl}/gp/offer-listing/${productId}`
        );

        res.json(await response.json());
    } catch (error) {
        res.json(error);
    }
});

// start server listening on given PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
