"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ratingController_1 = require("../controllers/ratingController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)({ mergeParams: true });
router.get('/', ratingController_1.getRatings);
router.post('/', authMiddleware_1.authMiddleware, ratingController_1.addRating);
exports.default = router;
