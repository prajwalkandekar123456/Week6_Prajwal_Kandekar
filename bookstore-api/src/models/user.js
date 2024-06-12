"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
    static initModel(sequelize) {
        User.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: new sequelize_1.DataTypes.STRING(128),
                allowNull: false,
            },
            email: {
                type: new sequelize_1.DataTypes.STRING(128),
                allowNull: false,
            },
            password: {
                type: new sequelize_1.DataTypes.STRING(128),
                allowNull: false,
            },
        }, {
            tableName: 'users',
            sequelize,
        });
        return User;
    }
}
exports.default = User;
