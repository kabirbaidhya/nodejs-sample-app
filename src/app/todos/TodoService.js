TodoService.$inject = ['$resource', '$timeout'];

export default function TodoService($resource, $timeout) {
    const API_BASE = 'http://127.0.0.1:8080';

    let todo = $resource(API_BASE + '/api/todos/:id', null, {
        'query': { method: 'GET', isArray: true },
        'get': { method: 'GET' },
        'save': { method: 'POST' },
        'update': { method: 'PUT' },
        'delete': { method: 'DELETE' }
    });

    this.getAll = () => todo.query().$promise;
    this.get = (id) => todo.get({ id: id }).$promise;
    this.save = (data) => todo.save(data).$promise;
    this.update = (id, data) => todo.update({ id: id }, data).$promise;
    this.delete = (id) => todo.delete({ id: id }).$promise;
}
