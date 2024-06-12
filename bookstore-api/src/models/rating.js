"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Rating extends sequelize_1.Model {
    static initModel(sequelize) {
        Rating.init({
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
            rating: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Rating',
        });
    }
}
exports.default = Rating;
