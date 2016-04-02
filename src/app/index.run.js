(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state, $stateParams, $log) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $log.debug('runBlock end');
  }

})();
