const Sequelize = require('sequelize');
const sequelize = require('../database/db'); // Veritabanı bağlantı dosyanız

// Modelleri içe aktar
const User = require('./user');
const Product = require('./product');
const Category = require('./category');

// İlişkileri tanımla
Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

// Diğer ilişkiler...

module.exports = {
    sequelize,
    User,
    Product,
    Category,
};
