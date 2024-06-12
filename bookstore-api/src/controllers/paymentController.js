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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = exports.createOrder = void 0;
const paymentService_1 = require("../services/paymentService");
const models_1 = require("../models");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const { bookId, amount } = req.body;
        const payment = yield (0, paymentService_1.createPayment)(user.id, bookId, amount);
        res.status(201).json(payment);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createOrder = createOrder;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const payment = yield models_1.Payment.findOne({ where: { id: req.params.id, userId: user.id } });
        if (payment) {
            res.json(payment);
        }
        else {
            res.status(404).json({ error: 'Order not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getOrderById = getOrderById;
