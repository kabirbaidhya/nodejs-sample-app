import angular from 'angular';
import KeyCode from 'keycode-js';

export default {
    bindings: {
        'text': '=',
        'placeholder': '@',
        'disabled': '=',
        'onSubmit': '=',
        'onKeypress': '=',
        'onEscape': '='
    },
    template: require('./textbox.html'),
    controllerAs: 'vm',
    controller: 'TextboxController'
};
