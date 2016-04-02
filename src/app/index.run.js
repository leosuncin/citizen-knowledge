(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
