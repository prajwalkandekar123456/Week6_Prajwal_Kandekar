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
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAuthors = void 0;
const models_1 = require("../models");
const getAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield models_1.Author.findAll();
        res.json(authors);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAuthors = getAuthors;
const getAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield models_1.Author.findByPk(req.params.id);
        if (author) {
            res.json(author);
        }
        else {
            res.status(404).json({ error: "Author not found" });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAuthorById = getAuthorById;
const createAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield models_1.Author.create(req.body);
        res.status(201).json(author);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createAuthor = createAuthor;
const updateAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield models_1.Author.findByPk(req.params.id);
        if (author) {
            yield author.update(req.body);
            res.json(author);
        }
        else {
            res.status(404).json({ error: "Author not found" });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateAuthor = updateAuthor;
const deleteAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield models_1.Author.findByPk(req.params.id);
        if (author) {
            yield author.destroy();
            res.status(204).end();
        }
        else {
            res.status(404).json({ error: "Author not found" });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteAuthor = deleteAuthor;
