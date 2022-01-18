import app from './app.js';
import routes from './routes.js';

// define port
const PORT = process.env.PORT || 5000;

// load routes
app.use(routes);

// start server listening on given PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
