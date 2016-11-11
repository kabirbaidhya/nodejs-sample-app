import express from 'express';
import bodyParser from 'body-parser';
import * as todo from './controllers/todo';

let router = express.Router();
let jsonParser = bodyParser.json();

router.get('/todos', todo.getAll);
router.post('/todos', jsonParser, todo.createTodo);
router.get('/todos/:id', todo.getTodo);
router.delete('/todos/:id', todo.deleteTodo);
router.put('/todos/:id', jsonParser, todo.updateTodo);

export default router;