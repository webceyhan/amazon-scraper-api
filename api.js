import 'dotenv/config';
import fetch from 'node-fetch';

/**
 * ScraperAPI Sample Usage
 *
 * http://api.scraperapi.com/
 *  ?api_key={API_KEY}
 *  &autoparse=true
 *  &url=https://www.amazon.com/dp/{productId}
 */

const API_KEY = process.env.API_KEY;
const BASE_URL = `http://api.scraperapi.com`;
const TARGET_BASE_URL = 'https://www.amazon.com';

/**
 *
 * @param {string} targetPath
 * @param {string} apiKey
 * @returns {string}
 */
export const fetchApi = async (targetPath, apiKey) => {
    var url = new URL(BASE_URL);

    url.search = new URLSearchParams({
        autoparse: true,
        api_key: apiKey || API_KEY,
        url: `${TARGET_BASE_URL}/${targetPath}`,
    }).toString();

    const response = await fetch(url);

    return await response.json();
};

// Resources ///////////////////////////////////////////////////////////////////////////////////////

export const searchProducts = async (query, apiKey) =>
    fetchApi(`s?k=${query}`, apiKey);

export const getProductDetails = async (productId, apiKey) =>
    fetchApi(`dp/${productId}`, apiKey);

export const getProductReviews = async (productId, apiKey) =>
    fetchApi(`product-reviews/${productId}`, apiKey);

export const getProductOffers = async (productId, apiKey) =>
    fetchApi(`gp/offer-listing/${productId}`, apiKey);
