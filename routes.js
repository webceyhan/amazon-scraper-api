import { Router } from 'express';
import api from './api.js';

// initialize router
const router = Router();

// define default route
router.get('/', (req, res) => {
    res.send('Welcome to Amazon Scraper API.');
});

// GET Product Details
router.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        res.json(await api(`dp/${productId}`));
    } catch (error) {
        res.json(error);
    }
});

// GET Product Reviews
router.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;

    try {
        res.json(await api(`product-reviews/${productId}`));
    } catch (error) {
        res.json(error);
    }
});

// GET Product Reviews
router.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;

    try {
        res.json(await api(`gp/offer-listing/${productId}`));
    } catch (error) {
        res.json(error);
    }
});

// GET Search Results
router.get('/search/:query', async (req, res) => {
    const { query } = req.params;

    try {
        res.json(await api(`s?k=/${query}`));
    } catch (error) {
        res.json(error);
    }
});

export default router;
