const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const energyRoutes = require('./routes/energy.routes');
const errorHandler = require('./middlewares/error.middleware');
const logger = require('./utils/logger');

app.use(logger);

app.use('/api/energy', energyRoutes);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.url} not found`
    });
});

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Energy Analytics Service running on port ${PORT}`);
});