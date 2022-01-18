const express = require('express');
const request = require('request-promise');

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

// start server listening on given PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
