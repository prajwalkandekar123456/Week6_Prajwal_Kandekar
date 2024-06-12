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
exports.deleteReview = exports.addReview = exports.getReviews = void 0;
const models_1 = require("../models");
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield models_1.Review.findAll({ where: { bookId: req.params.bookId } });
        res.json(reviews);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getReviews = getReviews;
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, bookId, content } = req.body;
        const review = yield models_1.Review.create({ userId, bookId, content });
        res.status(201).json(review);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.addReview = addReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const review = yield models_1.Review.findByPk(id);
        if (!review) {
            res.status(404).json({ error: 'Review not found' });
            return;
        }
        yield review.destroy();
        res.status(204).end();
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteReview = deleteReview;
