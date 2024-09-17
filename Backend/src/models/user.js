const { DataTypes } = require("sequelize")
const sequelize = require("../database/db")

const User = sequelize.define("User", {
    firstName: {
        type: DataTypes.STRING,
        validate: {
            len: [0, 200]
        }
    },
    lastName: {
        type: DataTypes.STRING,
        validate: {
            len: [0, 200]
        }
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    tableName: 'users'
})

module.exports = User;