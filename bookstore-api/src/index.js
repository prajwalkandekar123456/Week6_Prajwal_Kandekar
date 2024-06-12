"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models/index");
const routes = require("./routes");
const logger = require("./utils/logger");
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
// Routes
app.use(routes);
// Start the server
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    logger.info(`Server is running on port ${PORT}`);
    try {
        // Test database connection
        yield sequelize.authenticate();
        logger.info("Database connection has been established successfully.");
    }
    catch (error) {
        logger.error("Unable to connect to the database:", error);
    }
}));
