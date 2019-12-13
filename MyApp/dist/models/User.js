"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.UserSchema = new mongoose_1.default.Schema({
    tittle: {
        type: String,
        required: true
    },
    descraption: {
        type: String,
        required: true
    },
    addtype: {
        type: Boolean,
        default: false
    }
});
var Users = mongoose_1.default.model('users', exports.UserSchema);
module.exports = Users;
