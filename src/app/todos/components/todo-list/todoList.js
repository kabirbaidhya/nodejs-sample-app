export default {
    bindings: {
        'items': '='
    },
    template: require('./todoList.html'),
    controller() {
        let vm = this;

        vm.items = vm.items || [];

        vm.hasItems = function() {
            return (vm.items.length > 0);
        };

        vm.handleDelete = function(deletedItemId) {
            // Remove the deleted item out of the list
            vm.items = vm.items.filter(item => (item.id !== deletedItemId));
        };
    },
    controllerAs: 'vm'
};
