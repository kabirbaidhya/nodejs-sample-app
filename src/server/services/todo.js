import camelize from 'camelize';
import Todo from '../models/Todo';
import logger from '../foundation/logger';

export function fetchAll() {
    logger.debug('Fetching all the todos');

    return Todo.fetchAll().then(result => result.map(camelizeData));
}

export function fetch(id) {
    return fetchModel(id).then(camelizeData);
}

export function create(data) {
    let item = new Todo(data);

    logger.debug('Creating a new item with data', data);

    return item.save().then(createdItem => {
        logger.debug('Item created', createdItem);

        return fetch(createdItem.id);
    });
}

export function update(id, data) {
    return fetchModel(id)
        .then(item => item.set(data).save())
        .then(item => fetch(id));
}

export function destroy(id) {
    return fetchModel(id).then(item => {
        item.destroy();
    });
}

function fetchModel(id) {
    let item = Todo.where('id', id);

    return item.fetch().then(data => {
        logger.debug(`Got data for todo item ${id}`, data);

        return (data) ? data : Promise.reject({
            message: 'Todo not found.',
            status: 404
        });
    });
}

function camelizeData(data) {
    return camelize(data.attributes);
}
