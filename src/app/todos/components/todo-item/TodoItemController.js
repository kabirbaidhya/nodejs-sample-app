TodoItemController.$inject = ['$scope', 'TodoService'];

export default function TodoItemController($scope, TodoService) {
    let vm = this;

    vm.editing = false;
    vm.saving = false;

    vm.beginEdit = function() {
        vm.editing = true;
    };

    vm.stopEdit = function() {
        vm.editing = false;
    };

    vm.cancelEdit = function() {
        $scope.$apply(() => vm.stopEdit());
    };

    vm.saveChanges = function() {
        vm.saving = true;

        TodoService.update(vm.data.id, vm.data)
            .then(() => vm.stopEdit())
            .finally(() => {
                vm.saving = false;
            });
    };

    vm.delete = function() {
        vm.saving = true;

        TodoService.delete(vm.data.id)
            .then(() => {
                // Trigger parent's handler function after successful delete.
                vm.onDelete(vm.data.id);
            })
            .finally(() => {
                vm.saving = false;
            });
    };

    $scope.$watch('vm.data.completed', (newVal, oldVal) => {
        if (newVal !== oldVal) {
            vm.saveChanges();
        }
    });
}
