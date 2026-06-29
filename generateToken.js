const jwt = require('jsonwebtoken');
require('dotenv').config();

const token = jwt.sign(
    { uid: 1, email: 'junaid@test.com' },
    process.env.JWT_SECRET,
    { expiresIn: '7d'}
);

console.log('Token:', token);