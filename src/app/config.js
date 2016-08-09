// =============================================================================
// Config
// =============================================================================


app.config(['RestangularProvider', (RestangularProvider) => {

    // Setup Restangular
    // =========================================================================
    // We set the base URL but also provide empty keys that we set in `run()`.

    RestangularProvider
        .setBaseUrl('');

}]);
