
import {fetchTodos, fetch, create, destroy} from '../services/todo';

export function getAll(req, res) {
    respond(req, res, fetchTodos());
}

export function getTodo(req, res) {
    const todoId = req.params.id;

    respond(req, res, fetch(todoId));
}

export function createTodo(req, res) {
    const payload = req.body;

    respond(req, res, create());
}

export function deleteTodo(req, res) {
    const todoId = req.params.id;

    respond(req, res, destroy(todoId));
}

function respond(req, res, result) {
    result
        .then(data => res.json(data))
        .catch(err => res.status(err.status || 500).json({
            error: err
        }));
}