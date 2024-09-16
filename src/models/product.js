const { DataTypes } = require("sequelize")
const sequelize = require("../database/db")
const Category = require('./category'); // Category modeliniz


const Product = sequelize.define("Product", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id'
        }
    }
}, {
    tableName: 'products'
})

module.exports = Product;