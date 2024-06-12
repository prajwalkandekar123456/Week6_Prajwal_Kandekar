"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Author extends sequelize_1.Model {
    static initModel(sequelize) {
        Author.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            bio: {
                type: sequelize_1.DataTypes.STRING,
            },
            birthdate: {
                type: sequelize_1.DataTypes.DATE,
            },
            isSystemUser: {
                type: sequelize_1.DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            sequelize,
            modelName: 'Author',
        });
    }
}
exports.default = Author;
