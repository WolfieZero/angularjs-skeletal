// =============================================================================
// Shared Modules
// =============================================================================


// Lodash
// =============================================================================
// Include as module `_`
// See: https://lodash.com/

const lodash = angular
    .module('lodash', [])
    .factory('_', () => {
        return window._;
    }
);
