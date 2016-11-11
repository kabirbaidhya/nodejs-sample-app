import express from 'express';
import * as todo from './controllers/todo';

let router = express.Router();

// Hello World
router.get('/todos', todo.getAll);
router.get('/todos/:id', todo.getTodo);

export default router;