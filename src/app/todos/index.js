import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import config from './todos.config';
import TodoService from './TodoService';
import TodosController from './TodosController';

// Components
import textbox from './components/textbox/textbox';
import todoList from './components/todo-list/todoList';
import todoItem from './components/todo-item/todoItem';
import TextboxController from './components/textbox/TextboxController';
import TodoItemController from './components/todo-item/TodoItemController';

let todos = angular.module('todos', [uiRouter, ngResource]);

todos.config(config)
    .component('textbox', textbox)
    .component('todoList', todoList)
    .component('todoItem', todoItem)
    .service('TodoService', TodoService)
    .controller('TodosController', TodosController)
    .controller('TextboxController', TextboxController)
    .controller('TodoItemController', TodoItemController);

export default todos.name;
