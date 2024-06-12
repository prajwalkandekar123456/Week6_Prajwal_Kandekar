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
exports.addRating = exports.getRatings = void 0;
const models_1 = require("../models");
const getRatings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ratings = yield models_1.Rating.findAll({ where: { bookId: req.params.bookId } });
        res.json(ratings);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getRatings = getRatings;
const addRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const { rating } = req.body;
        const newRating = yield models_1.Rating.create({
            userId: user.id,
            bookId: req.params.bookId,
            rating,
        });
        res.status(201).json(newRating);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.addRating = addRating;
