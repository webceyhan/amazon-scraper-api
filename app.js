import express from 'express';

// init app
const app = express();

// use json serializing
app.use(express.json());

export default app;
