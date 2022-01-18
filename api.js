import fetch from 'node-fetch';

/**
 * ScraperAPI Sample Usage
 
 * http://api.scraperapi.com/?api_key=7f67afa5ed3beed9619dbf4c848b6642&autoparse=true&url=https://www.amazon.com/dp/B08N5KWB9H
 *
 */

const API_KEY = '7f67afa5ed3beed9619dbf4c848b6642';
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

export const searchProducts = async (query) => fetchApi(`s?k=${query}`);

export const getProductDetails = async (productId) =>
    fetchApi(`dp/${productId}`);

export const getProductReviews = async (productId) =>
    fetchApi(`product-reviews/${productId}`);

export const getProductOffers = async (productId) =>
    fetchApi(`gp/offer-listing/${productId}`);
