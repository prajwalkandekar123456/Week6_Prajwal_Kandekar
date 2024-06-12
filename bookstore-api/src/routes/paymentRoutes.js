"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = require("../controllers/paymentController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.post('/', authMiddleware_1.authMiddleware, paymentController_1.createOrder);
router.get('/:id', authMiddleware_1.authMiddleware, paymentController_1.getOrderById);
exports.default = router;
