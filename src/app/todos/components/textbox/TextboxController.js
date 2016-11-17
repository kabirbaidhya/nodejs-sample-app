import angular from 'angular';
import KeyCode from 'keycode-js';

TextboxController.$inject = ['$element', '$timeout'];

export default function TextboxController($element, $timeout) {
    let vm = this;

    const inputBox = () => $element.find('input');
    const hasKeypressHandler = () => angular.isFunction(vm.onKeypress);
    const hasEscapeHandler = () => angular.isFunction(vm.onEscape);
    const hasSubmitHandler = () => angular.isFunction(vm.onSubmit);

    vm.placeholder = vm.placeholder || 'Enter Text';

    vm.$onInit = function() {
        inputBox().focus();

        $timeout(() => {
            angular.element('body').on('click', handleBodyClick);
        });
    };

    vm.$onDestroy = function() {
        angular.element('body').off('click', handleBodyClick);
    };

    vm.handleKeyPress = function(e) {
        if (hasKeypressHandler()) {
            // Invoke the onKeypress handler
            vm.onKeypress(e);
        }

        if (e.which === KeyCode.KEY_ESCAPE && hasEscapeHandler()) {
            // Invoke the Escape handler
            vm.onEscape(e);
        }

        if (e.which === KeyCode.KEY_RETURN && hasSubmitHandler()) {
            vm.text = vm.text.trim();

            if (!vm.text) {
                return;
            }

            // Invoke the onSubmit handler
            vm.onSubmit(vm.text, e);
        }
    };

    function handleBodyClick(e) {
        // If clicked outside of the textbox, invoke the escape handler
        if (!angular.element(e.target).is(inputBox()) && hasEscapeHandler()) {
            $timeout(() => vm.onEscape(e));
        }
    }
}
