const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    jwtSecret: process.env.JWT_SECRET,
    environment: process.env.NODE_ENV || 'development',
};

module.exports = config;
