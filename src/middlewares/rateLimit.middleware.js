const rateLimiter = require('express-rate-limit');

const limiter = rateLimiter({
    windowMs: 1 * 60 * 1000,
    max: 10,
    message: {
        success: false,
        message: 'too many requests, please try again a minute later'
    },
    standardHeaders: true,
    legacyHeaders: false
});

module.exports = limiter;