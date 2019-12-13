"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var uri = 'mongodb+srv://teerathkumar:tukrani@cluster0-g3saw.mongodb.net/test?retryWrites=true&w=majority';
mongoose_1.default.connect(uri, { useNewUrlParser: true });
module.exports = mongoose_1.default;
