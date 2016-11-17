config.$inject = ['$stateProvider'];

export default function config($stateProvider) {
    $stateProvider.state('todos', {
        url: '/todos',
        template: require('./todos.html'),
        controller: 'TodosController',
        controllerAs: 'vm'
    });
}
