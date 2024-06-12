"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Book extends sequelize_1.Model {
    static initModel(sequelize) {
        Book.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            bookCode: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            title: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: sequelize_1.DataTypes.STRING,
            },
            publishedYear: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            price: {
                type: sequelize_1.DataTypes.FLOAT,
            },
            externalId: {
                type: sequelize_1.DataTypes.STRING,
            },
        }, {
            sequelize,
            modelName: 'Book',
        });
    }
}
exports.default = Book;
