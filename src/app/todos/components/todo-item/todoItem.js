import angular from 'angular';

export default {
    bindings: {
        'data': '=',
        'onDelete': '='
    },
    template: require('./todoItem.html'),
    controllerAs: 'vm',
    controller: 'TodoItemController'
};
