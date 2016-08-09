// =============================================================================
// App
// =============================================================================


// Module
// =============================================================================

var app = angular.module('app', [
    'templates',
    'ui.router',
    'restangular',
    'lodash'
]);


// Run
// =============================================================================

app.run(function () {
    console.log('=== running app ===');
});

// =============================================================================
// Config
// =============================================================================


app.config(['RestangularProvider', function (RestangularProvider) {

    // Setup Restangular
    // =========================================================================
    // We set the base URL but also provide empty keys that we set in `run()`.

    RestangularProvider
        .setBaseUrl('');

}]);

// =============================================================================
// Routes
// =============================================================================

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider

        .state('home', {
            url: '/home',
            views: {
                '@': {
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as home'
                }
            }
        })

    ;

});

// =============================================================================
// Home Controller
// =============================================================================


app.controller('HomeController',
    [function () {

        /**
         * Define the public object for the controller
         *
         * @type  {Object}
         */
        var HomeController = {
            title: 'Home'
        };

        return HomeController;

    }]
);

// =============================================================================
// Shared Modules
// =============================================================================


// Lodash
// =============================================================================
// Include as module `_`
// See: https://lodash.com/

var lodash = angular
    .module('lodash', [])
    .factory('_', function () {
        return window._;
    }
);

//# sourceMappingURL=app.js.map
