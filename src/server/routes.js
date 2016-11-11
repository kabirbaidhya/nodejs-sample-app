import express from 'express';
import bodyParser from 'body-parser';
import * as todo from './controllers/todo';

let router = express.Router();
let jsonParser = bodyParser.json();

router.get('/todos', todo.getAll);
router.get('/todos/:id', todo.getTodo);
router.post('/todos', jsonParser, todo.createTodo);

export default router;