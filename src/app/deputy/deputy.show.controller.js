(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .controller('DeputyShowController', DeputyShowController);

  /** @ngInject */
  function DeputyShowController(diputado, $log) {
    var vm = this;
    vm.diputado = diputado;

    function init() {
      $log.log('Deputy controller');
    }

    init();
  }
})();
