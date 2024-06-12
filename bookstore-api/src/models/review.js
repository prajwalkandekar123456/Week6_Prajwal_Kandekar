"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Review extends sequelize_1.Model {
    static initModel(sequelize) {
        Review.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            bookId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            content: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Review',
        });
    }
}
exports.default = Review;
