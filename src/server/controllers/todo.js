
import {fetchAll, fetch, create, update, destroy} from '../services/todo';

export function getAll(req, res) {
    respond(req, res, fetchAll());
}

export function getTodo(req, res) {
    const todoId = req.params.id;

    respond(req, res, fetch(todoId));
}

export function createTodo(req, res) {
    const payload = req.body;

    respond(req, res, create(payload));
}

export function deleteTodo(req, res) {
    const todoId = req.params.id;

    respond(req, res, destroy(todoId));
}

export function updateTodo(req, res) {
    const todoId = req.params.id;
    const payload = req.body;

    respond(req, res, update(todoId, payload));
}

function respond(req, res, result) {
    result
        .then(data => res.json(data))
        .catch(err => res.status(err.status || 500).json({
            error: err
        }));
}