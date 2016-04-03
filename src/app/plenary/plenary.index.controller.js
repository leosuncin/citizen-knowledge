(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .controller('PlenaryIndexController', PlenaryIndexController);

  /** @ngInject */
  function PlenaryIndexController(plenarias, $log) {
    var vm = this;
    vm.plenarias = plenarias;

    function init() {
      $log.log('Plenaries controller');
    }

    init();
  }
})();
