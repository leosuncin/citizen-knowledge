(function() {
  'use strict';

  angular
    .module('citizenKnowledge')
    .controller('LawShowController', LawShowController);

  /** @ngInject */
  function LawShowController(decreto, explicacion, $log) {
    var vm = this;
    vm.decreto = decreto;
    vm.explicacion = explicacion;

    function init() {
      $log.log('Law controller');
    }

    init();
  }
})();
