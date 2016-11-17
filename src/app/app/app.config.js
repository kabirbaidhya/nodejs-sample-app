config.$inject = ['$urlRouterProvider'];

export default function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/todos');
}
