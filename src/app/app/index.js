import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './app.config';
import todos from '../todos';
import angularUiBlock from 'angular-ui-block';

let app = angular.module('app', [uiRouter, todos, angularUiBlock]);

app.config(config);

export default app.name;
