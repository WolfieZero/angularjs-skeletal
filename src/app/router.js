// =============================================================================
// Routes
// =============================================================================

app.config(($stateProvider, $urlRouterProvider) => {

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
