const config = require('../config/config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    logging: false, // Debug mesajlarını kapatmak için
});

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connected to the mysql database.');
    })
    .catch(err => {
        console.error('Database connection failed:', err.stack);
    });

module.exports = sequelize;
