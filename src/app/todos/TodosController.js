TodosController.$inject = ['TodoService'];

export default function TodosController(TodoService) {
    let vm = this;

    vm.todos = [];
    vm.todoInput = '';
    vm.saving = false;

    vm.saveTodo = function() {
        let todo = {
            title: vm.todoInput,
            completed: false
        };

        saveTodoItem(todo);
    };

    function init() {
        loadTodos();
    }

    function loadTodos() {
        vm.loading = true;

        TodoService.getAll()
            .then((data) => {
                vm.todos = data;
            })
            .finally(() => {
                vm.loading = false;
            });
    }

    function saveTodoItem(todo) {
        vm.saving = true;

        TodoService.save(todo)
            .then((item) => {
                vm.todos.push(item);
                vm.todoInput = '';
            })
            .finally(() => {
                vm.saving = false;
            });
    }

    init();
}
