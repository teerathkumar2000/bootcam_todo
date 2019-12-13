import express from 'express';
const router:express.Router = express.Router();
router.use('/todoApp/api',require('./TodoApp/TodoApp'));

module.exports= router