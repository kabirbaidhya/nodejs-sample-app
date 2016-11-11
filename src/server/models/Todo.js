import bookshelf from '../foundation/bookshelf';

const Todo = bookshelf.Model.extend({
    tableName: 'todo'
});

export default Todo;
