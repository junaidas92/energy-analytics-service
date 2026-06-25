const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const energyRoutes = require('./routes/energy.routes');
app.use('/api/energy', energyRoutes);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Energy Analytics Service running on port ${PORT}`);
});