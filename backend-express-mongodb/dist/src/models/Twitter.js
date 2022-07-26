"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    tweet: { type: String, required: true },
    img: { type: String, required: false },
});
const TwitterModel = (0, mongoose_1.model)("contents", schema);
exports.default = TwitterModel;
