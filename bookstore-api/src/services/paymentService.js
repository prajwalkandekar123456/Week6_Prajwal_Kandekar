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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayment = void 0;
const axios_1 = __importDefault(require("axios"));
const models_1 = require("../models");
const createPayment = (userId, bookId, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post('https://api.gocardless.com/payments', {
        amount,
        currency: 'USD',
        links: {
            mandate: 'MANDATE_ID',
        },
    }, {
        headers: {
            'Authorization': `Bearer ${process.env.GC_ACCESS_TOKEN}`,
            'GoCardless-Version': '2015-07-06',
        },
    });
    const payment = yield models_1.Payment.create({
        userId,
        bookId,
        amount,
        status: response.data.status,
    });
    return payment;
});
exports.createPayment = createPayment;
