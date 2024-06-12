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
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getBooks = void 0;
const models_1 = require("../models");
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield models_1.Book.findAll({ include: [models_1.Author, models_1.Review, models_1.Rating] });
        res.json(books);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getBooks = getBooks;
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield models_1.Book.findByPk(req.params.id, { include: [models_1.Author, models_1.Review, models_1.Rating] });
        if (book) {
            res.json(book);
        }
        else {
            res.status(404).json({ error: 'Book not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getBookById = getBookById;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield models_1.Book.create(req.body);
        res.status(201).json(book);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createBook = createBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield models_1.Book.findByPk(req.params.id);
        if (book) {
            yield book.update(req.body);
            res.json(book);
        }
        else {
            res.status(404).json({ error: 'Book not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield models_1.Book.findByPk(req.params.id);
        if (book) {
            yield book.destroy();
            res.status(204).end();
        }
        else {
            res.status(404).json({ error: 'Book not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteBook = deleteBook;
