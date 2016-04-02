(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .controller('DeputyIndexController', DeputyIndexController);

  /** @ngInject */
  function DeputyIndexController(diputados, $log) {
    var vm = this;
    vm.diputados = diputados;

    function init() {
      $log.log('Deputies controller');
    }

    init();
  }
})();
