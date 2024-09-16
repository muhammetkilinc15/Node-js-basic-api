const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models/index'); // ModellerSequelize bağlantı dosyanız



// Routes 
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);



async function initializeDatabase() {
    try {
        await sequelize.sync({ force: true }); // { force: true } will drop and recreate the tables
        console.log('Database tables created successfully.');
    } catch (error) {
        console.error('Error creating database tables:', error);
    }
}

initializeDatabase();


// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;