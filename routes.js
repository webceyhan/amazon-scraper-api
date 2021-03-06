import { Router } from 'express';
import * as api from './api.js';

// initialize router
const router = Router();

// define default route
router.get('/', (req, res) => {
    res.send('Welcome to Amazon Scraper API.');
});

// GET Product Details
router.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        res.json(await api.getProductDetails(productId, api_key));
    } catch (error) {
        res.json(error);
    }
});

// GET Product Reviews
router.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        res.json(await api.getProductReviews(productId, api_key));
    } catch (error) {
        res.json(error);
    }
});

// GET Product Offers
router.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try {
        res.json(await api.getProductOffers(productId, api_key));
    } catch (error) {
        res.json(error);
    }
});

// GET Search Results
router.get('/search/:query', async (req, res) => {
    const { query } = req.params;
    const { api_key } = req.query;

    try {
        res.json(await api.searchProducts(query, api_key));
    } catch (error) {
        res.json(error);
    }
});

export default router;
