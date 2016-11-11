
import Todo from '../models/Todo';

export function fetchTodos() {
    return Todo.fetchAll();
}

export function fetch(id) {
    let found = Todo.where('id', id).fetch();

    return found.then(
        data => (data) ? data : Promise.reject({
            message:'Todo not found.',
            status: 404
        })
    );
}