
import {fetchTodos, fetch} from '../services/todo';

export function getAll(req, res) {
    fetchTodos()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({
            error: err
        }));
}

export function getTodo(req, res) {
    const todoId = req.params.id;

    fetch(todoId)
        .then(data => res.json(data))
        .catch(err => res.status(err.status || 500).json({
            error: err
        }));
}