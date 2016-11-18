TodoService.$inject = ['$resource', '$timeout'];

export default function TodoService($resource, $timeout) {
    let todo = $resource(process.env.API_BASE_URI + '/todos/:id', null, {
        'query': {method: 'GET', isArray: true},
        'get': {method: 'GET'},
        'save': {method: 'POST'},
        'update': {method: 'PUT'},
        'delete': {method: 'DELETE'}
    });

    this.getAll = () => todo.query().$promise;
    this.get = (id) => todo.get({id: id}).$promise;
    this.save = (data) => todo.save(data).$promise;
    this.update = (id, data) => todo.update({id: id}, data).$promise;
    this.delete = (id) => todo.delete({id: id}).$promise;
}
