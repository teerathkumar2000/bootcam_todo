"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var cors_1 = __importDefault(require("cors"));
var PORT = process.env.PORT || 3000;
app.use(cors_1.default());
var moongose = require('./MyApp/dist/config/database');
var db = moongose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('Portal is connected succesfully');
});
app.listen(PORT, function () {
    console.log('server is running');
});
app.use(express_1.default.json());
var myViews = require('./MyApp/dist/routes');
app.use('/', myViews);
